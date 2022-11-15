import course from '../models/course.js';

const nav = $('.module-navigation')
nav.load('src/components/module-navigation.html')
const index = course.getIndex()

index.forEach(element => {
  $('#accordion-module').load('src/components/module-navigation-item.html')
  $('.accordion-header').header.attr('id', element.id)
  $('.accordion-button').val(element.title)
});
