import React from "react";
import '../assets/styles/AudioForm.css'

const createAudiobook_text = "Crear Audiolibro";
const editarAudiobook_text = "Editar Audiolibro";
const create_text = "Crear";
const editar_text = "Editar";

class AudioEditForm extends React.Component {
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="form-container">
        <h1>{this.props.isCreate?createAudiobook_text:editarAudiobook_text}</h1>
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Título</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="title"
              value={this.props.formValues.title}
            />
            <label htmlFor="is Original">Original</label>
            <input
              onChange={this.props.onChange}
              className="form-control checkbox"
              type="checkbox"
              name="is_original"
              value={this.props.formValues.is_original}
            />
            <label htmlFor="Street Date">Street Date</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="date"
              name="street_date"
              value={this.props.formValues.street_day}
            />
            <label htmlFor="CosPerPlay">Cost Per Play</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="cost_per_play"
              value={this.props.formValues.cost_per_play}
            />
            <label htmlFor="Authors">Autores</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="authors"
              value={this.props.formValues.authors}
            />
            <label htmlFor="Narrators">Narradores</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="text"
              name="narrators"
              value={this.props.formValues.narrator}
            />
            <label htmlFor="Duration">Duración</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="number"
              name="duration"
              value={this.props.formValues.duration}
            />
            <label htmlFor="Cover">Cover</label>
            <input
              onChange={this.props.onChange}
              className="form-control"
              type="url"
              name="cover"
              value={this.props.formValues.cover}
            />
          </div>

          <button onClick={this.props.onSubmit} className="btn btn-primary button-send">
          {!this.props.isCreate?editar_text:create_text}
          </button>

          {this.props.error && (
            <p className="text-danger">{this.props.error}</p>
          )}
        </form>
      </div>
    );
  }
}

export default AudioEditForm;
