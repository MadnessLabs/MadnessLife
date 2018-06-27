import { Component } from "@stencil/core";
import "@stencil/router";

import { APIService } from "../../services/api";
import { ConfigService } from "../../services/config";
import { DatabaseService } from "../../services/database";

@Component({
  tag: "madness-life",
  styleUrl: "madness-life.scss"
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
