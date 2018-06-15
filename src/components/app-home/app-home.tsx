import { Component, Element } from "@stencil/core";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @Element() appHomeEl: HTMLAppHomeElement;

  render() {
    return (
      <div>
        <ion-card>Welcome Home! ^_^</ion-card>
        <br />
        <stencil-route-link url="/contact">Contact Us</stencil-route-link>
      </div>
    );
  }
}
