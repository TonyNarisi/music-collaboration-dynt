class MasterTrack extends React.Component {
  constructor() {
    super();
    this.state = {
      displayComments: false,
      displayDescription: false,
      displayCollaborators: false
    }
    this.toggleCommentView = this.toggleCommentView.bind(this);
    this.toggleDescriptionView = this.toggleDescriptionView.bind(this);
    this.toggleCollaboratorView = this.toggleCollaboratorView.bind(this);
  }

  toggleCommentView() {
    this.setState({
      displayComments: !this.state.displayComments,
      displayDescription: false,
      displayCollaborators: false
    })
  }

  toggleDescriptionView() {
    this.setState({
      displayComments: false,
      displayDescription: !this.state.displayDescription,
      displayCollaborators: false
    })
  }

  toggleCollaboratorView() {
    this.setState({
      displayComments: false,
      displayDescription: false,
      displayCollaborators: !this.state.displayCollaborators
    })
  }

  // Need to add like button, ability to add comments to track, and ability to download track
  render() {
    let masterTrack = this.props.masterTrack
     // The ternary here is because masterTrack is a deeply nested resource, and needs to wait to receive all of its information. Without the ternary, masterTrack tries to render while still undefined, but with the ternary, it will wait until it is defined to render, removing the chance of a loading error.
    return (
      <div>
      { masterTrack === undefined ?
          null
        :
          <div className="master-track-holder">
            <audio controls>
              <source src={masterTrack.file_path} type="audio/mpeg" />
            </audio>
          <button onClick={this.toggleCommentView}>
            { this.state.displayComments ?
                <p>Hide Comments</p>
              :
                <p>Show Comments</p>
            }
          </button>
          <button onClick={this.toggleDescriptionView}>
            { this.state.displayDescription ?
                <p>Hide Description</p>
              :
                <p>Show Description</p>
            }
          </button>
          <button onClick={this.toggleCollaboratorView}>
            { this.state.displayCollaborators ?
                <p>Hide Collaborators</p>
              :
                <p>Show Collaborators</p>
            }
          </button>
          <div>
            { this.state.displayComments ?
                < TrackComments comments={masterTrack.comments}/>
              :
                null
            }
            { this.state.displayDescription ? 
                <p>{masterTrack.description}</p>
              :
                null
            }
            { this.state.displayCollaborators ?
                < TrackCollaborators featureTracks={masterTrack.feature_tracks}/>
              :
                null
            }
          </div>
        </div>
      }
      </div>
    )
  }
}