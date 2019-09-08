import React from "react";
import Pagination from "../pagination/Pagination";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchState: props.searchState,
      activePage: 1,
      itemsCountPerPage: props.itemsCountPerPage ? props.itemsCountPerPage : 20,
      rows: props.rows ? props.rows : [],
      tfooter: props.tfooter ? props.tfooter : [],
      filter: props.filter,
      columns: this.props.columns,
      active: [false, true, false, false],
      values: props.values ? this.props.values : [10, 20, 30, 50],
      eventKey: 0
    };
    this.handlePageChange = this.handlePageChange.bind(this);
    this.changeItemsCountPerPage = this.changeItemsCountPerPage.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  // componentDidMount() {
  //   !this.props.noPagination && this.handlePageChange(this.state.activePage);
  // }
  componentWillReceiveProps(nextProps) {
    this.setState({
      rows: nextProps.rows,
      tfooter: nextProps.tfooter,
      filter: nextProps.filter,
      searchState: nextProps.searchState
    });
    if (nextProps.searchState) this.setState({ activePage: 1 });
  }

  handleSelect(eventKey, event) {
    var active = [false, false, false, false];
    active[eventKey - 1] = true;
    this.setState({
      active: active,
      eventKey: eventKey - 1
    });
    this.changeItemsCountPerPage(this.state.values[eventKey - 1]);
  }

  changeItemsCountPerPage(itemsCount) {
    // var itemsCount = parseInt(event.target.value);
    !this.props.noPagination &&
      this.setState(
        { itemsCountPerPage: itemsCount, activePage: 1 },
        function() {
          this.props.handlePageChange(
            this.state.filter,
            this.state.activePage,
            this.state.itemsCountPerPage
          );
        }
      );
  }

  handlePageChange = pageNumber => {
    !this.props.noPagination &&
      this.setState({ activePage: pageNumber }, function() {
        this.props.handlePageChange(
          this.state.filter,
          pageNumber,
          this.state.itemsCountPerPage
        );
      });
  };

  render() {
    return (
      <div className="dataTables_wrapper dt-bootstrap4 no-footer nice-scroll">
        <table
          className={`table ${
            this.props.classTable ? this.props.classTable : "table-striped"
          }`}
        >
          <thead className={this.props.classThead ? this.props.classThead : ""}>
            <tr
              className={this.props.classTrHead ? this.props.classTrHead : ""}
            >
              {!this.props.thead
                ? this.props.columns.map((column, index) => {
                    return (
                      <>
                        {!column.renderHeaderSort ? (
                          <th key={index} scope="col" className={column.class}>
                            {column.renderHeader
                              ? column.renderHeader(0)
                              : column.label}
                          </th>
                        ) : (
                          <>
                            {column.renderHeaderSort(
                              column.column,
                              column.label
                            )}
                          </>
                        )}
                      </>
                    );
                  })
                : this.props.thead.map((column, index) => {
                    return (
                      <th
                        key={index}
                        scope="col"
                        className={column.class}
                        colSpan={column.colspan ? column.colspan : "1"}
                      >
                        {column.renderHeader
                          ? column.renderHeader(0)
                          : column.label}
                      </th>
                    );
                  })}
            </tr>
            {this.props.tr && (
              <tr className="bg-custom-gray">
                {this.props.columns.map((column, index) => {
                  return (
                    <th key={index} scope="col" className="grid-content-text11">
                      {column.renderHeader
                        ? column.renderHeader(0)
                        : column.label}
                    </th>
                  );
                })}
              </tr>
            )}
          </thead>
          <tbody className="bg-white">
            {this.state.rows ? (
              this.state.rows.map((row, index1) => {
                return (
                  <tr key={index1}>
                    {this.state.columns.map((column, index) => {
                      return (
                        <td key={index} className={column.tdClass}>
                          {column.renderBody
                            ? column.renderBody(row[column.column])
                            : column.renderBodyId
                            ? column.renderBodyId(
                                row[column.column],
                                row[column.columnId]
                              )
                            : column.renderBody2
                            ? column.renderBody2(
                                row[column.column],
                                row[column.column1],
                                row[column.column2]
                              )
                            : column.renderBody3
                            ? column.renderBody3(
                                row[column.column],
                                row[column.column1],
                                row[column.column2],
                                row[column.column3]
                              )
                            : column.renderBody4
                            ? column.renderBody4(
                                row[column.column],
                                row[column.column1],
                                row[column.column2],
                                row[column.column3],
                                row[column.column4]
                              )
                            : column.renderBody5
                            ? column.renderBody5(
                                row[column.column],
                                row[column.column1],
                                row[column.column2],
                                row[column.column3],
                                row[column.column4],
                                row[column.column5]
                              )
                            : column.renderBody7
                            ? column.renderBody7(
                                row[column.column],
                                row[column.column1],
                                row[column.column2],
                                row[column.column3],
                                row[column.column4],
                                row[column.column5],
                                row[column.column6],
                                row[column.column7]
                              )
                            : column.column === "tableIndex"
                            ? (this.state.activePage - 1) *
                                this.state.itemsCountPerPage +
                              1 +
                              index1
                            : row[column.column]}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr className="bg-white">
                <td
                  className="grid-content-text16"
                  colspan={this.state.columns.length}
                >
                  Pas de données disponibles
                </td>
              </tr>
            )}
          </tbody>
          {this.props.tfooter && (
            <tfoot>
              <tr>
                {this.props.tfooter.map((column, index) => {
                  return (
                    <td
                      key={index}
                      scope="col"
                      className={column.class}
                      colSpan={column.colspan ? column.colspan : "1"}
                    >
                      {column.renderFooter
                        ? column.renderFooter(0)
                        : column.label}
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          )}
        </table>
        {!this.props.noPagination && (
          <div className="row mx-0 py-1 py-sm-3">
            <div className="col-sm-6 d-flex justify-content-between justify-content-sm-end align-items-center py-1">
              <DropdownButton
                variant="pagination-pink d-flex justify-content-between"
                title={this.state.itemsCountPerPage}
              >
                {this.state.values.map((item, index) => {
                  return (
                    <Dropdown.Item
                      href="javascript:void(0)"
                      eventKey={index + 1}
                      onSelect={this.handleSelect}
                      active={item}
                    >
                      {item}
                    </Dropdown.Item>
                  );
                })}
                {/* <Dropdown.Item href="#" eventKey="1" onSelect={this.handleSelect}
                  active={this.state.active[0]}>{this.state.values[0]}</Dropdown.Item>
                <Dropdown.Item href="#" eventKey="2" onSelect={this.handleSelect}
                  active={this.state.active[1]}>{this.state.values[1]}</Dropdown.Item>
                <Dropdown.Item href="#" eventKey="3" onSelect={this.handleSelect}
                  active={this.state.active[2]}>{this.state.values[2]}</Dropdown.Item>
                <Dropdown.Item href="#" eventKey="4" onSelect={this.handleSelect}
                  active={this.state.active[3]}>{this.state.values[3]}</Dropdown.Item> */}
              </DropdownButton>
              {/* <select
                className="form-control selectpicker w-auto"
                data-style="btn btn-pagination-pink"
                onChange={this.changeItemsCountPerPage}
                value={this.state.itemsCountPerPage}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="50">50</option>
              </select> */}
              <span className="k-datatable__pager-detail ml-2">
                Afficher &nbsp;{" "}
                {(this.state.activePage - 1) * this.state.itemsCountPerPage + 1}{" "}
                -
                {(this.state.activePage - 1) * this.state.itemsCountPerPage +
                  this.state.itemsCountPerPage <=
                this.props.total
                  ? (this.state.activePage - 1) * this.state.itemsCountPerPage +
                    this.state.itemsCountPerPage
                  : this.props.total}
                &nbsp; of &nbsp; {this.props.total}
              </span>
            </div>
            <div className="col-sm-6 d-flex justify-content-center justify-content-sm-end align-items-center py-1">
              <div className="dataTables_paginate paging_simple_numbers">
                <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={this.state.itemsCountPerPage}
                  totalItemsCount={this.props.total}
                  pageRangeDisplayed={4}
                  onChange={this.handlePageChange}
                  itemClass={"paginate_button page-item "}
                  linkClass={"page-link"}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Grid;
