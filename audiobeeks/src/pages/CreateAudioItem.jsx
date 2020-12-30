import React from 'react'
import Loader from '../components/Loader'
import AudioForm from '../components/AudioForm'

import '../assets/styles/CreateAudioItem.css'

class CreateAudioItem extends React.Component{
    state = {
        loading: false,
        error: null,
        form: {
          firstName: "",
          lastName: "",
          email: "",
          jobTitle: "",
          twitter: "",
        },
      };
    
      handleChange = (e) => {
        const nextForm = this.state.form;
        nextForm[e.target.name] = e.target.value;
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
    
      handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({ loading: true, error: null });
        try {
        //   await api.badges.create(this.state.form);
        var myHeaders = new Headers();
        myHeaders.append("X-Contentful-Content-Type", process.env.REACT_APP_CONTENT_TYPE_ID);

        var raw = "{\n    \"fields\": {\n      \"title\": {\n        \"es-MX\": \"Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future\"\n      },\n      \"is_original\": {\n        \"es-MX\": false\n      },\n      \"street_date\": {\n        \"es-MX\": \"2020-12-25T00:00-06:00\"\n      },\n      \"cost_per_play\": {\n        \"es-MX\": 90\n      },\n      \"authors\": {\n        \"es-MX\": [\n          \"Ashlee Vance\"\n        ]\n      },\n      \"narrators\": {\n        \"es-MX\": [\n          \"Fred Sanders\"\n        ]\n      },\n      \"duration\": {\n        \"es-MX\": 589632\n      },\n      \"cover\": {\n        \"es-MX\": \"https://images.findawayworld.com/v1/image/cover/CD059097\"\n      }\n    }\n  }";

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch(`https://api.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/environments/${process.env.REACT_APP_ENVIRONMENT}/entries`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
                this.setState({ loading: false });
            
                this.props.history.push("/badges");
                } catch (error) {
                this.setState({ loading: false, error: error });
                }
            };
    
      render() {
        if (this.state.loading) {
          return <Loader />;
        }
        return (
          <React.Fragment>
            <div className="container">
              <div className="row">
                {/* <div className="col">
                  <Badge
                    firstName={this.state.form.firstName || "FIRST_NAME"}
                    lastName={this.state.form.lastName || "LAST_NAME"}
                    jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                    email={this.state.form.email || "EMAIL"}
                    twitter={this.state.form.twitter || "TWITTER"}
                    avatarURL="https://www.gravatar.com/avatar?d=identicon"
                  />
                </div> */}
                <div className="col-6">
                  <AudioForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      }

}

export default CreateAudioItem;