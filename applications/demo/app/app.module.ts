import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';

import { GrpcMessage } from '@ngx-grpc/common';
import { GrpcCoreModule, GrpcLoggerModule } from '@ngx-grpc/core';
import { GrpcWebClientModule } from '@ngx-grpc/grpc-web-client';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    GrpcCoreModule.forRoot(),
    GrpcWebClientModule.forRoot({
      settings: { host: 'http://localhost:50600' },
    }),
    GrpcLoggerModule.forRoot({
      settings: {
        requestMapper: (msg: GrpcMessage) => msg.toProtobufJSON(),
        responseMapper: (msg: GrpcMessage) => msg.toProtobufJSON(),
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
