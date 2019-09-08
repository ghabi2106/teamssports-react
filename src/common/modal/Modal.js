import React from "react";
class Modal extends React.Component {
  constructor(props) {
    super();
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    document.getElementById(this.props.id + "-close").click();
  }

  render() {
    return (
      <div id={this.props.id} className="modal" role="dialog">
        <div className={`modal-dialog ${this.props.modalWidth}`}
          role="document" >
          <div className="modal-content">
            <div className="modal-header">
              {this.props.title ? (
                <h5 className="modal-title">{this.props.title}</h5>
              ) : (
                this.props.titleFn
              )}
              <button
                type="button"
                id={`${this.props.id}-close`}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className={`modal-body ${
                this.props.classBody ? this.props.classBody : ""
              }`}
            >
              {this.props.children}
            </div>
            {!this.props.noFooter && (
              <div
                className={`modal-footer ${
                  this.props.classFooter ? this.props.classFooter : ""
                }`}
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={this.closeModal}
                >
                  Close
                </button>
                {!this.props.notSaveChnages && (
                  <button
                    type="button"
                    className="btn btn-custom-yellow"
                    onClick={this.props.save}
                  >
                    {this.props.btnSaveText}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
