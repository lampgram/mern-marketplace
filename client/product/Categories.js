import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import GridList, { GridListTile } from 'material-ui/GridList'
import Icon from 'material-ui/Icon'
import {list} from './api-product.js'
import Products from './Products'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    width:'100%',
    transform: 'translateZ(0)',
  },
  tileTitle: {
    verticalAlign: 'middle',
    lineHeight: 1.9,
    textAlign: 'center',
    fontSize: '1.2em',
    margin: '0 4px 0 0',
    cursor:'pointer',
    borderRadius:'6px'
  },
  card: {
    margin: 'auto',
    marginTop: 20
  },
  title: {
    padding:`${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle,
    backgroundColor: 'white',
    fontSize: '1.1em'
  },
  icon: {
    verticalAlign: 'sub',
    color: '#738272',
    fontSize: '0.9em'
  },
  link: {
    color: 'white'
  }
})

class Categories extends Component {
  state = {
    products: [],
    selected: ''
  }
  componentWillReceiveProps = (props) => {
    this.setState({selected: props.categories[0]})
    list({
      category: props.categories[0]
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({products: data})
      }
    })
  }

  listbyCategory = category => event => {
    this.setState({selected: category})
    list({
      category: category
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({products: data})
      }
    })
  }

  render() {
    const {classes} = this.props
    return (
      <div>
        <Card className={classes.card}>
          <Typography type="title" className={classes.title}>
            Explore by category
          </Typography>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={4}>
              {this.props.categories.map((tile, i) => (
                <GridListTile key={i} className={classes.tileTitle} onClick={this.listbyCategory(tile)} style={{height: '40px', backgroundColor: this.state.selected == tile? 'black':'rgba(0, 0, 0, 0.8)'}}>
                  <span className={classes.link}>{tile}  <Icon className={classes.icon}>{this.state.selected == tile && 'arrow_drop_down'}</Icon></span>
                </GridListTile>
              ))}
            </GridList>
          </div>
          <Divider/>
          <Products products={this.state.products} searched={false}/>
        </Card>
      </div>
    )
  }
}
Categories.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
}

export default withStyles(styles)(Categories)
