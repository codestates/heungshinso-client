import React from 'react';
import Article from '../components/article';
import Filter from '../components/filter';
import '../styles/filter.css';
import { serverAddress } from '../app';
class Apply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalData: null,

      ft_items: [],
      ft_items_id: 1,

      query: '',

      data: this.props.users,
    };
  }

  modalOn(modal) {
    this.setState({ modal: true });
    this.setState({ modalData: modal });
  }

  modalOff() {
    this.setState({ modal: false });
  }

  addQuery(e, item) {
    // this.setState(state => ({
    //   ft_items_id: state.ft_items_id + 1
    // }))
    this.setState({ ft_items: [...this.state.ft_items, e.target.textContent] });

    if (this.state.query === '') {
      if (item === 'resion') {
        this.setState(
          (state) => ({
            query: state.query + `?resion=${e.target.textContent}`,
          }),
          this.filterFetch
        );
      } else if (item === 'position') {
        this.setState(
          (state) => ({
            query: state.query + `?position=${e.target.textContent}`,
          }),
          this.filterFetch
        );
      } else if (item === 'state') {
        this.setState(
          (state) => ({
            query: state.query + `?user_status=${e.target.textContent}`,
          }),
          this.filterFetch
        );
      }
    } else {
      if (item === 'resion') {
        this.setState(
          (state) => ({
            query: state.query + `&resion=${e.target.textContent}`,
          }),
          this.filterFetch
        );
      } else if (item === 'position') {
        this.setState(
          (state) => ({
            query: state.query + `&position=${e.target.textContent}`,
          }),
          this.filterFetch
        );
      } else if (item === 'state') {
        this.setState(
          (state) => ({
            query: state.query + `&user_status=${e.target.textContent}`,
          }),
          this.filterFetch
        );
      }
    }
  }

  replaceQuery(e, item) {
    if (
      item === '구직중' ||
      item === '구인중' ||
      item === '재직중' ||
      item === '이직희망' ||
      item === '사이드잡희망'
    ) {
      this.setState(
        (state) => ({
          query: state.query.replace(`state=${item}`, ''),
        }),
        this.filterFetch
      );
      this.setState(
        (state) => ({
          ft_items: state.ft_items.filter((el) => el !== item),
        }),
        this.filterFetch
      );
    } else if (
      item === 'Planner' ||
      item === 'Designer' ||
      item === 'Developer' ||
      item === 'ETC'
    ) {
      this.setState(
        (state) => ({
          query: state.query.replace(`position=${item}`, ''),
        }),
        this.filterFetch
      );
      this.setState(
        (state) => ({
          ft_items: state.ft_items.filter((el) => el !== item),
        }),
        this.filterFetch
      );
    } else {
      this.setState(
        (state) => ({
          query: state.query.replace(`resion=${item}`, ''),
        }),
        this.filterFetch
      );
      this.setState(
        (state) => ({
          ft_items: state.ft_items.filter((el) => el !== item),
        }),
        this.filterFetch
      );
    }

    if (this.state.ft_items.length === 1) {
      this.setState({ query: '' });
    }
  }

  filterFetch() {
    let url = `${serverAddress}/users/apply${this.state.query}`;
    console.log(url);
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        credentials: 'include',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ data: res });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        {/* {console.log(this.props.users.filter(user => {
          return user.username === "duyjlepc"
        }))} */}
        {/* {console.log(this.state.data)} */}
        <div className="apply_container">
          {/* filter_section */}
          <section className="filter_section">
            <Filter
              addQuery={this.addQuery.bind(this)}
              replaceQuery={this.replaceQuery.bind(this)}
              ft_items={this.state.ft_items}
            />
          </section>

          {/* apply_section */}
          <section className="apply__section">
            <div className="apply_articles">
              {this.state.data.map((user) => (
                <Article
                  key={user.id}
                  user={user}
                  modalOn={this.modalOn.bind(this)}
                />
              ))}
            </div>
          </section>
        </div>
        {/* modal_section */} {console.log(this.state.modalData)}
        {this.state.modal ? (
          <>
            <section className="modal_section">
              <div
                className="modal_overlay"
                onClick={this.modalOff.bind(this)}
              ></div>
              <div className="modal_card">
                <img
                  src={this.state.modalData.url}
                  className="modal_card_img"
                ></img>
                <span className="modal_card_info">
                  <dl>
                    <dt>user</dt>
                    <dd>: {this.state.modalData.username}</dd>
                    <dt>position</dt>
                    <dd>: {this.state.modalData.user_position}</dd>
                    <dt>region</dt>
                    <dd>: {this.state.modalData.user_region}</dd>
                    <dt>status</dt>
                    <dd>: {this.state.modalData.user_status}</dd>
                  </dl>
                </span>
                <div className="modal_card_item">
                  <dt>description</dt>
                  <dd>{this.state.modalData.description}</dd>
                </div>
                <div className="modal_card_item">
                  <dt>carrer</dt>
                  <dd>{this.state.modalData.career}</dd>
                </div>
                <div className="modal_card_item">
                  <dt>prize</dt>
                  <dd>{this.state.modalData.prize}</dd>
                </div>
                <div className="modal_card_item">
                  <dt>portfolio</dt>
                  <dd>{this.state.modalData.portfolio}</dd>
                </div>
              </div>
            </section>
          </>
        ) : null}
      </>
    );
  }
}

export default Apply;
