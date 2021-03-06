/**
 * @author Hana Lee
 * @since 2016-05-16 15:35
 */

import SqliteService from './shared/sqlite.service.js';
import ItemService from './shared/item.service';
import ValueService from './shared/value.service';
import DatePickerService from './shared/datepicker.service';
import Components from './components/components';
import onReady from './bootstrap';
import config from './app.config';
import QUERIES from './shared/queries.constant';
import Log from './shared/log.provider';

let moduleList = ['ionic', 'ngCordova', 'ionic-datepicker', 'angular-momentjs', Components.name];

angular.module('PIGDATA', moduleList)
  .constant('QUERIES', QUERIES)
  .provider('pdLog', Log)
  .run(onReady)
  .config(config)
  .service('SqliteService', SqliteService)
  .service('ItemService', ItemService)
  .service('ValueService', ValueService)
  .service('DatePickerService', DatePickerService);
