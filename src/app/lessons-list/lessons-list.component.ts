import { Component, OnInit } from '@angular/core';
import { globalEventBus, Observer, LESSONS_LIST_AVAILABLE } from '../event-bus-experiments/event-bus';
import { Lesson } from '../shared/model/lesson';

@Component({
	selector: 'lessons-list',
	templateUrl: './lessons-list.component.html',
	styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer {

	lessons: Lesson[] = [];

	constructor() {
		console.log('Lessons list component is registered as observer ...');
		globalEventBus.registerObserver(LESSONS_LIST_AVAILABLE, this);
	}

	notify(data: Lesson[]) {
		console.log('Lessons list component received data ...');
		this.lessons = data;
	}
}
