'use strict';
const React = require('react');

const Preview = require('preview');
const id = 'esevplugin';

const fn = ({
    term,
    display,
    update,
    actions
}) => {
    display({
        id: 'eseverythingplugin',
        //icon,
        order: 11,
        title: `Search Everything for ${term}`,
        getPreview: () => < Preview term = {
            term
        }
        />
    });};


module.exports = {
    fn,
    keyword: 'ev',
    name: 'Search Everything'
}
