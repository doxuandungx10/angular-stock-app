import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    NzTabsModule,
    DragDropModule,
    NzNotificationModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzGridModule
  ],
  exports: [
    NzIconModule,
    NzButtonModule,
    NzModalModule,
    NzTabsModule,
    DragDropModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzGridModule
  ],
  declarations: [],
  providers: [],
})
export class ShareModule {}
