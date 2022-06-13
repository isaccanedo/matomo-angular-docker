import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dev-to",
  template: `
    <div style="margin-bottom: 8px">
      Sometimes I write about stuff on
      <a
        style="margin-left:2px"
        target="_blank"
        href="http://www.dev.to/fborges42"
        >dev.to</a
      >
    </div>
    <div>
      Please feel free to checkout my (few) posts there, comment, share your
      ideas with us!
    </div>
  `,
  styles: [
    `
      * {
        font-size: 16px;
        display: flex;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: center;
      }
    `,
  ],
})
export class DevToComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
