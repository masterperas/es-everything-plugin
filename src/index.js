'use strict';
const React = require('react');
import { search } from 'cerebro-tools'
const Preview = require('preview');
const Settings = require('settings');
const id = 'esevplugin';
var utils = require('./utils');

const fn = ({
    term,
    display,
    update,
    config,
    actions
}) => {
    const found = search(["settings"], term).length > 0

    if(found){
        display({
            id: 'eseverythingpluginsettings',
            //icon,
            order: 1,
            title: `Search Everything Settings`,
            getPreview: () => < Settings config= {config} />
        });
    }

    const path = config.get(utils.CONSTANTS.PATH_KEY);
    display({
        id: 'eseverythingplugin',
        //icon,
        order: 11,
        title: `Search Everything for ${term}`,
        getPreview: () => < Preview term = {
            term
        } path = { path }
        />
    });
};


module.exports = {
    fn,
    keyword: 'ev',
    name: 'Search Everything'
}
