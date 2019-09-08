import React from "react";
import PlayersService from "../../services/players.service";
import Grid from "../../common/grid/Grid";

class Players extends React.Component {
  constructor(props) {
    super(props);
    this.state = {players : []};
    this.playersService = new PlayersService();
  }

  componentDidMount = () => {
    debugger;
    this.playersService
      .getAll()
      .then(response => {
        debugger;
        var players = response.data.data.players;
        this.setState({ players });
      })
      .catch(error =>
        this.setState({
          error: true
        })
      );
  };

  render() {
    const columns = [
      {
        column: "name",
        label: "Name",
        class: "title",
        tdClass: "grid-content-text9 text-nowrap"
      },
      {
        column: "id",
        label: "Id",
        class: "title",
        tdClass: "grid-content-text9 text-nowrap"
      }
    ];
    return (
      <div>
        <Grid
          columns={columns}
          rows={this.state.players}
          noFooter
          noPagination
        />
        
        {/* {this.state.players &&
          this.state.players.map((player, index) => {
            return <label key={index}>{player.name}</label>;
          })} */}
      </div>
    );
  }
}
export default Players;
