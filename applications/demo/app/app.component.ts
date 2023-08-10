import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelloRequest } from 'api/hello-world.pb'
import { HelloWorldClient } from 'api/hello-world.pbsc'

@Component({
  selector: 'baz-ngc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  private sub: Subscription = Subscription.EMPTY;
  name: string = "";
  message: string = "";

  constructor(private helloWorldClient: HelloWorldClient) { }

  greet() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
    const request = new HelloRequest({
      name: this.name
    });

    this.sub = this.helloWorldClient.greet(request).subscribe(
      response => {
        this.message = response.message
      }
    )
  }
}
