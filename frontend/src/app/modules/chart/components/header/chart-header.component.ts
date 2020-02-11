import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-chart-header',
  templateUrl: './chart-header.component.html',
  styleUrls: ['./chart-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartHeaderComponent {
  @Input() title: string;
  @Output() selectChange = new EventEmitter<string>();
}
