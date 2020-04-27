import React from "react";
import axios from "axios";
import Report from "../../components/Report";
 
class ReportListPage extends React.Component {
    state = {
        isLoading: false,
        reports: []
    }

    getReports = async () => {
        const {
            data: {
              data: { movies }
            }
          } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating"); // 수정
          this.setState({ reports: movies, isLoading: false }) //수정
    } 

    componentDidMount() {
        this.getReports();
    }

    render() {
        const { isLoading, reports } = this.state;
        return(
            <section>
                { isLoading ? (
                    <div className="loader">
                        <span className="loader__text">
                            Loading...
                        </span>
                    </div>
                ):(
                    <div className="reports">
            {
               reports.map(report => (
                <Report key={report.id} id={report.id} category={report.title} date={report.date_uploaded}/>
              ))
            }
          </div>
                )}
            </section>
        )

    }
}

export default ReportListPage;