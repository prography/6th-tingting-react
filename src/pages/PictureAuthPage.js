import React from 'react';
import axios from "axios";
import User from "../components/User";

class PictureAuthPage extends React.Component {
  state = {
    isLoading : true,
    users: []
  }

  getUsers = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); // 수정
    this.setState({ users: movies, isLoading: false }) //수정
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { isLoading, users } = this.state;
    return (
    <section className = "container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">
            Loading...
          </span>
        </div>) : (
          <div className="users">
            {
               users.map(user => (
                <User key={user.id} id={user.id} gender={user.title} image={user.medium_cover_image}/>
              ))
            }
          </div>
         )}
    </section>
  );
  }
}

export default PictureAuthPage;
