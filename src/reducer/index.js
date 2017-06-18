/*
 * @Author: Zhang-Zhen-Yang 
 * @Date: 2017-05-27 00:16:08 
 * @Last Modified by: Zhang-Zhen-Yang
 * @Last Modified time: 2017-06-16 01:26:15
 */
import { combineReducers } from 'redux';
import counter from './counter';
import windowSize from './windowSize'
import readingMangaIndex from './readingMangaIndex'

export default combineReducers({
  counter,
  windowSize,
  readingMangaIndex
});