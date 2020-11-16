import React from 'react';
import Article from '../components/article'
import Filter from '../components/filter'
import '../styles/filter.css';

class Apply extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      modalData: null,
      ft_items: [],
      query: '',
      data: this.props.users
    }
  }

  modalOn(modal) {
    this.setState({ modal: true })
    this.setState({ modalData: modal })
  }

  modalOff() {
    this.setState({ modal: false })
  }

  changeQuery(e, item) {
    if (this.state.query === '') {
      if (item === 'resion') {
        this.setState(state => ({
          query: state.query + `?resion=${e.target.textContent}`
        }))
      }
      else if (item === 'position') {
        this.setState(state => ({
          query: state.query + `?position=${e.target.textContent}`
        }))

      }
      else if (item === 'state') {
        this.setState(state => ({
          query: state.query + `?state=${e.target.textContent}`
        }))
      }
    }
    else {
      if (item === 'resion') {
        this.setState(state => ({
          query: state.query + `&resion=${e.target.textContent}`
        }))
      }
      else if (item === 'position') {
        this.setState(state => ({
          query: state.query + `&position=${e.target.textContent}`
        }))

      }
      else if (item === 'state') {
        this.setState(state => ({
          query: state.query + `&state=${e.target.textContent}`
        }))
      }
    }
  }

  filterItems(e) {
    this.setState({ ft_items: [...this.state.ft_items, e.target.textContent] })
  }

  componentDidUpdate() {
    const url = `http://localhost:3000/users/apply${this.state.query}`
    if (this.state.query !== '') {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(res => console.log(res))
        .then(res => {
          this.setState({ data: res })
        })
        .catch(err => console.log(err))
    }
  }



  render() {
    return (
      <>
        {console.log(this.state.query)}
        {/* {console.log(this.props.users.filter(user => {
          return user.username === "duyjlepc"
        }))} */}
        <div className="apply_container">
          {/* filter_section */}
          < section className="filter_section">
            <Filter changeQuery={this.changeQuery.bind(this)} filterItems={this.filterItems.bind(this)} ft_items={this.state.ft_items} />
          </section>

          {/* apply_section */}
          <section className="apply__section">
            <div className="apply_articles">
              {this.state.data.map(user => (
                <Article key={user.id} user={user} modalOn={this.modalOn.bind(this)} />
              ))}
            </div>
          </section>
        </div>

        {/* modal_section */}
        {this.state.modal ? <>
          <section className="modal_section">
            <div className="modal_overlay" onClick={this.modalOff.bind(this)}></div>
            <div className="modal_card">
              <div className="username">{this.state.modalData.username}</div>
              <div className="position">{this.state.modalData.user_position}</div>
              <div className="region">{this.state.modalData.user_region}</div>
              <div className="status">{this.state.modalData.user_status}</div>
            </div>
          </section>
        </> : null}
      </>
    )
  }
}

export default Apply
