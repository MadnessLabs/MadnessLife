import { Component } from "@stencil/core";
import "@stencil/router";

import { ConfigService } from "../../services/config";
import { DatabaseService } from "../../services/database";
import { APIService } from "../../services/api";

@Component({
  tag: "madness-life",
  styleUrl: "madness-life.css"
})
export class MadnessLife {
  defaultProps: {
    api: APIService;
    db: DatabaseService;
  };

  componentWillLoad() {
    const config = new ConfigService();
    const appConfig = config.get("app");
    this.defaultProps = {
      api: new APIService({
        host: appConfig.apiUrl
      }),
      db: new DatabaseService()
    };
  }

  render() {
    return (
      <stencil-router>
        <stencil-route
          url="/"
          component="app-home"
          componentProps={this.defaultProps}
          exact={true}
        />
      </stencil-router>
    );
  }
}
