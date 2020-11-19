import React from 'react';
import Article from './article';
import Filter from '../components/filter';

class Recruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modalData: null,

      ft_items: [],
      ft_items_id: 1,

      query: '',

      data: this.props.teams.slice(0, 6),
      dataCount: 6,
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
      }
    }
  }

  replaceQuery(e, item) {
    if (
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
    let url = `http://localhost:3000/teams/recruit${this.state.query}`;
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

  componentDidMount() {
    window.onscroll = function (ev) {
      if (ev === null) {
        return null;
      }
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        if (this.props) {
          if (this.props.teams.length >= this.state.dataCount) {
            console.log('deleted');
            this.setState(
              (pres) => {
                return { dataCount: pres.dataCount };
              },
              () => {
                this.setState({
                  data: this.props.teams.slice(0, this.state.dataCount),
                });
              }
            );
          }
        }
      }
    };
  }

  render() {
    return (
      <>
        <div className="recruit_container">
          {/* filter_section */}
          <section className="filter_section">
            <Filter
              team={1}
              addQuery={this.addQuery.bind(this)}
              replaceQuery={this.replaceQuery.bind(this)}
              ft_items={this.state.ft_items}
            />
          </section>

          {/* recruit_section */}
          <section className="recruit__section">
            <div className="recruit_articles">
              {this.state.data.map((team) => (
                <Article
                  key={team.id}
                  team={team}
                  modalOn={this.modalOn.bind(this)}
                />
              ))}
            </div>
          </section>
        </div>

        {/* modal_section */}
        {this.state.modal ? (
          <>
            <section className="modal_section">
              <div
                className="modal_overlay"
                onClick={this.modalOff.bind(this)}
              ></div>
              <div className="modal_card">
                <div className="title">{this.state.modalData.title}</div>
                <div className="username">작성자: 추노</div>
                <div className="description">
                  {this.state.modalData.description}
                </div>
                <div className="position">
                  {this.state.modalData.team_position}
                </div>
                <div className="region">{this.state.modalData.team_region}</div>
              </div>
            </section>
          </>
        ) : null}
      </>
    );
  }
}

export default Recruit;
