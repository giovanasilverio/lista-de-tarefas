import { Component, signal } from '@angular/core';
import { InputAddItem } from '../../components/input-add-item/input-add-item';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputAddItem],
  templateUrl: './list.html',
  styleUrl: './list.scss'
})
export class List {
    public addItem = signal(true);

}
