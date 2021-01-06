import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Anmelden</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="email"
            className="form-control"
            placeholder="Benutzername"
          />
        </div>

        <div className="form-group">
          <label>Passwort</label>
          <input
            type="password"
            className="form-control"
            placeholder="Passwort"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Anmelde-Daten Speichern?
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Anmelden
        </button>
      </form>
    );
  }
}
