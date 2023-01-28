// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("jquery")
import {} from 'jquery-ujs'
//= require jquery3
//= require jquery_ujs
//= require rails-ujs
//= require_tree
//= require bootstrap.min
//= require turbolinks
import './add_jquery'
import "controllers"
import "@hotwired/turbo-rails"
import "channels"
import "core-js/stable"
import "regenerator-runtime/runtime"
import * as ActiveStorage from "@rails/activestorage"
 import Rails from "@rails/ujs"

Rails.start()
ActiveStorage.start()