// DO NOT MODIFY!.
// generated by x-cli, it will be overwrite eventually!


import xengine from "@zkty-team/x-engine-module-engine";
import mock from "./mock";
function osCheck() {
  if (false) {
    return mock;
} 
  else {

    return  xengine.use("com.zkty.module.nav", 
    [
  {
    "name": "setNavTitle",
    "default_args": {
      "title": "title",
      "titleColor": "#000000",
      "titleSize": 16
    },
    "decorators": []
  },
  {
    "name": "setNavLeftBtn",
    "default_args": {
      "title": "",
      "titleColor": "#000000",
      "titleSize": 16,
      "icon": "",
      "iconSize": [
        "20",
        "20"
      ]
    },
    "decorators": []
  },
  {
    "name": "setNavRightBtn",
    "default_args": {
      "title": "right",
      "titleColor": "#000000",
      "titleSize": 16,
      "icon": "",
      "iconSize": [
        "20",
        "20"
      ]
    },
    "decorators": []
  },
  {
    "name": "setNavRightMenuBtn",
    "default_args": {
      "title": "menu",
      "titleColor": "#000000",
      "titleSize": 16,
      "icon": "",
      "iconSize": [
        "20",
        "20"
      ],
      "popWidth": "200",
      "showMenuImg": "false",
      "popList": [
        {
          "icon": "",
          "iconSize": "20",
          "title": "1"
        },
        {
          "icon": "",
          "iconSize": "20",
          "title": "2"
        },
        {
          "icon": "",
          "iconSize": "20",
          "title": "3"
        }
      ]
    },
    "decorators": []
  },
  {
    "name": "setNavRightMoreBtn",
    "default_args": {
      "btns": [
        {
          "title": "right1",
          "titleColor": "#000000",
          "titleSize": 16,
          "iconSize": [
            "20",
            "20"
          ]
        },
        {
          "title": "",
          "icon": "/assets/search.png",
          "titleColor": "#000000",
          "titleSize": 16,
          "iconSize": [
            "20",
            "20"
          ]
        }
      ]
    },
    "decorators": []
  },
  {
    "name": "navigatorPush",
    "default_args": {
      "url": "",
      "hideNavbar": false
    },
    "decorators": []
  },
  {
    "name": "navigatorBack",
    "default_args": {
      "url": "",
      "hideNavbar": false
    },
    "decorators": []
  },
  {
    "name": "setNavSearchBar",
    "default_args": {
      "cornerRadius": 5,
      "backgroundColor": "#FF0000",
      "iconSearch": "",
      "iconSearchSize": [
        20,
        20
      ],
      "iconClear": "",
      "iconClearSize": [
        20,
        20
      ],
      "textColor": "#000000",
      "fontSize": 16,
      "placeHolder": "默认文字",
      "placeHolderFontSize": 16,
      "isInput": true,
      "becomeFirstResponder": false
    },
    "decorators": []
  },
  {
    "name": "setSearchBarHidden",
    "default_args": {},
    "decorators": []
  },
  {
    "name": "setNavBarHidden",
    "default_args": {},
    "decorators": []
  },
  {
    "name": "removeHistoryPage",
    "default_args": {},
    "decorators": []
  }
]
)}}

export default osCheck();
