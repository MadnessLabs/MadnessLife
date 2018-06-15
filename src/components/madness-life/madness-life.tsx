import { Component } from "@stencil/core";
import "@stencil/router";

@Component({
  tag: "madness-life",
  styleUrl: "madness-life.css"
})
export class MadnessLife {
  render() {
    return (
      <stencil-router>
        <stencil-route url="/" component="app-home" exact={true} />
      </stencil-router>
    );
  }
}
