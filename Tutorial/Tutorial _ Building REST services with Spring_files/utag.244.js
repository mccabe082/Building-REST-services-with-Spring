//~~tv:7132.20190708
//~~tc: Resolve error on pages manually tagged with gtm.
//~~tc: Add support for cross domain tracking and gtag.js dataLayer renaming
//~~tc: Add conversion event only if no event is set.
//~~tc: Prepend "AW-" Conversion ID prefix if not present
//~~tc: Assign default pageview to a Conversion ID

//tealium universal tag - utag.sender.7132 ut4.0.202207150223, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try {
  (function (id, loader) {
    var u = {"id" : id};
    utag.o[loader].sender[id] = u;
    // Please do not modify
    if (utag.ut === undefined) { utag.ut = {}; }
    // Start Tealium loader 4.41
    /* utag.js version 4.26 or above is required to avoid errors with this loader function */
    var match = /ut\d\.(\d*)\..*/.exec(utag.cfg.v);
    if (utag.ut.loader === undefined || !match || parseInt(match[1]) < 41) { u.loader = function(o, a, b, c, l, m) { utag.DB(o); a = document; if (o.type == "iframe") { m = a.getElementById(o.id); if (m && m.tagName == "IFRAME") { b = m; } else { b = a.createElement("iframe"); } o.attrs = o.attrs || {}; utag.ut.merge(o.attrs, { "height": "1", "width": "1", "style": "display:none" }, 0); } else if (o.type == "img") { utag.DB("Attach img: " + o.src); b = new Image(); } else { b = a.createElement("script"); b.language = "javascript"; b.type = "text/javascript"; b.async = 1; b.charset = "utf-8"; } if (o.id) { b.id = o.id; } for (l in utag.loader.GV(o.attrs)) { b.setAttribute(l, o.attrs[l]); } b.setAttribute("src", o.src); if (typeof o.cb == "function") { if (b.addEventListener) { b.addEventListener("load", function() { o.cb(); }, false); } else { b.onreadystatechange = function() { if (this.readyState == "complete" || this.readyState == "loaded") { this.onreadystatechange = null; o.cb(); } }; } } if (o.type != "img" && !m) { l = o.loc || "head"; c = a.getElementsByTagName(l)[0]; if (c) { utag.DB("Attach to " + l + ": " + o.src); if (l == "script") { c.parentNode.insertBefore(b, c); } else { c.appendChild(b); } } } }; } else { u.loader = utag.ut.loader; }
    // End Tealium loader
    // Start Tealium typeOf 4.35
    if (utag.ut.typeOf === undefined) { u.typeOf = function(e) {return ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};} else { u.typeOf = utag.ut.typeOf; }
    // End Tealium typeOf

    u.ev = {"view" : 1};

    u.toBoolean = function (val) {
      val = val || "";
      return val === true || val.toLowerCase() === "true" || val.toLowerCase() === "on";
    };

    u.clearEmptyKeys = function (object) {
      for (var key in object) {
        if (object[key] === "" || object[key] === undefined) {
          delete object[key];
        }
      }
      return object;
    };

    u.isEmptyObject = function(o, a) {
      for (a in o) {
        if (utag.ut.hasOwn(o, a)) return false;
      }
      return true;
    };

    u.hasgtagjs = function (){
      window.gtagRename = window.gtagRename || "" || "gtag";
      if (utag.ut.gtagScriptRequested) {
        return true;
      }
      var i, s = document.getElementsByTagName("script");
      for (i = 0; i < s.length; i++) {
        if (s[i].src && s[i].src.indexOf("gtag/js") >= 0 && (s[i].id && s[i].id.indexOf('utag') > -1)) {
          return true;
        }
      }
      var data_layer_name = "" || "dataLayer";
      window[data_layer_name] = window[data_layer_name] || [];
      if ( typeof window[window.gtagRename] !== "function" ) {
        window[window.gtagRename] = function() { window[data_layer_name].push(arguments); };

        //START CROSS DOMAIN TRACKING
        var cross_track_domains = "";

        if (cross_track_domains !== "") {
          window[window.gtagRename]("set", "linker", {
            domains: cross_track_domains.split(","),
            accept_incoming: true
          });
        }
        //END CROSS DOMAIN TRACKING

        window[window.gtagRename]("js", new Date());
      }
      return false;
    };

    u.scriptrequested = u.hasgtagjs();

    u.o = window[window.gtagRename];

    u.map_func = function (arr, obj, item) {
      var i = arr.shift();
      obj[i] = obj[i] || {};
      if (arr.length > 0) {
        u.map_func(arr,obj[i], item);
      } else {
        obj[i] = item;
      }
    };

    u.sites = {
      "ecomm": {
        "required": ["prodid"],
        "params": ["prodid", "pagetype", "totalvalue", "category", "pvalue", "quantity"],
        "valuerules": ["product", "cart", "purchase"]
      },
      "hotel": {
        "required": ["hotelid"],
        "params": ["hotelid", "pagetype", "checkoutdate", "totalvalue"],
        "valuerules": ["cart", "purchase"]
      },
      "edu": {
        "required": ["pid"],
        "params": ["pid", "plocid", "pagetype"]
      },
      "flight": {
        "required": ["originid", "destid"],
        "params": ["originid", "destid", "pagetype", "totalvalue", "startdate", "enddate"],
        "valuerules": ["cart", "purchase"]
      },
      "hrental": {
        "required": ["id"],
        "params": ["id", "pagetype", "startdate", "enddate", "totalvalue"],
        "valuerules": ["conversionintent", "conversion"]
      },
      "job": {
        "required": ["id"],
        "params": ["id", "locid", "pagetype", "totalvalue"],
        "valuerules": ["conversionintent", "conversion"]
      },
      "local": {
        "required": ["id"],
        "params": ["id", "pagetype", "totalvalue"],
        "valuerules": ["conversionintent", "conversion"]
      },
      "listing": {
        "required": ["id"],
        "params": ["id", "pagetype", "totalvalue"],
        "valuerules": ["conversionintent", "conversion"]
      },
      "travel": {
        "required": ["destid"],
        "params": ["destid", "originid", "pagetype", "startdate", "enddate", "totalvalue"],
        "valuerules": ["conversionintent", "conversion"]
      },
      "dynx": {
        "required": ["itemid"],
        "params": ["itemid", "itemid2", "pagetype", "totalvalue"],
        "valuerules": ["conversionintent"]
      }
    };
     
    u.checkRequired = function (siteName, site) {
      var i, valid = false;
      if (!u.data[siteName]) {
        return valid;
      }
      for (i = 0; i < site.required.length; i++) {
        valid = u.data[siteName][site.required[i]] ? true : false;
      }
      return valid;
    };
    
    // Return totalvalue via mapping or default value order_subtotal. Check valuerules before returning value
    u.getValue = function (paramName, siteName, site) {
      var i;
      for (i = 0; i < site.valuerules.length; i++) {
        if (u.data.pagetype &&  u.data.pagetype === site.valuerules[i]) {
          return u.data[siteName][paramName] || u.data.order_subtotal;
        }
      }
    };
    
    u.getParams = function () {
      var siteName, g = {}, i;
      for (siteName in u.sites) {
        var site = u.sites[siteName];
        if (!u.data[siteName]) { continue; }
        if ( u.checkRequired(siteName, site) ) {
          for (i = 0; i < site.params.length; i++) {
            if (site.params[i] === "totalvalue") {
              g[siteName + "_" + site.params[i]] = u.getValue(site.params[i], siteName, site );
            } else if (site.params[i] === "pagetype") {
              // Use generic pagetype mapping for all site types
              g[siteName + "_" + site.params[i]] = u.data.pagetype;
            } else {
              g[siteName + "_" + site.params[i]] = u.data[siteName][site.params[i]];
            }
          }
        }
      }
      return u.clearEmptyKeys(g);
    };

    // Returns an array of Product objects for use in basket reporting
    u.getItems = function (len) {
      var g = {}, i, items = [];

      len = len || u.data.product_id.length;

      for (i = 0; i < len; i++) {
        g = {};  
        g.id = u.data.product_id[i];
        g.price = (u.data.product_unit_price[i] ? u.data.product_unit_price[i] : "");
        g.quantity = (u.data.product_quantity[i] ? u.data.product_quantity[i] : "");
        items.push(g);
      }

      return items;
    }

      u.map={};
  u.extend=[];


    u.send = function (a, b) {
      if (u.ev[a] || u.ev.all !== undefined) {
        utag.DB("send:244");
        utag.DB(b);

        var c, d, e, f, h, i, j;

        u.data = {
          "base_url" : "https://www.googletagmanager.com/gtag/js",
          "conversion_id" : "DC-12036309",
          "conversion_label" : "",
          "conversion_value" : "",
          "pagetype" : "home",
          "remarketing" : "true",
          "data_layer_name": "",
          // E-Commerce Vars
          "product_id" : [],
          "product_category" : [],
          "product_quantity" : [],
          "product_unit_price" : [],
          "product_discount" : [],
          "config" : {},
          "event_data" : {},
          "event" : [],
          "custom" : {}
        };

        // Start tag-scoped extensions
        
        utag.DB("send:244:EXTENSIONS");
        utag.DB(b);
        // End tag-scoped extensions

        c = [];

        // Start Mapping
        for (d in utag.loader.GV(u.map)) {
          if (b[d] !== undefined && b[d] !== "") {
            e = u.map[d].split(",");
            for (f = 0; f < e.length; f++) {
              u.map_func(e[f].split("."), u.data, b[d]);
            }
          } else {
            h = d.split(":");
            if (h.length === 2 && b[h[0]] === h[1]) {
              if (u.map[d]) {
                u.data.event = u.data.event.concat(u.map[d].split(","));
              }
            }
          }
        }
        utag.DB("send:244:MAPPINGS");
        utag.DB(u.data);
        // End Mapping

        // Pull E-Commerce extension values
        // Mappings override E-Commerce extension values
        u.data.order_id = u.data.order_id || b._corder || "";
        u.data.order_subtotal = u.data.conversion_value || u.data.order_subtotal || b._csubtotal || "";
        u.data.order_currency = u.data.conversion_currency || u.data.order_currency || b._ccurrency || "";
        if (u.data.product_id.length === 0 && b._cprod !== undefined) { u.data.product_id = b._cprod.slice(0); }
        if (u.data.product_category.length === 0 && b._ccat !== undefined) { u.data.product_category = b._ccat.slice(0); }
        if (u.data.product_quantity.length === 0 && b._cquan !== undefined) { u.data.product_quantity = b._cquan.slice(0); }
        if (u.data.product_unit_price.length === 0 && b._cprice !== undefined) { u.data.product_unit_price = b._cprice.slice(0); }
        if (u.data.product_discount.length === 0 && b._cpdisc !== undefined) { u.data.product_discount = b._cpdisc.slice(0); }
        if (u.data.event.length === 0 && b._cevent !== undefined) { u.data.event = (u.typeOf(b._cevent) === "array") ? b._cevent.slice(0) : [b._cevent] ; }
        if (typeof(u.data.conversion_id) === "string" && u.data.conversion_id !== ""){ u.data.conversion_id = u.data.conversion_id.replace(/\s/g, "").split(","); }
        if (typeof(u.data.conversion_label) === "string"  && u.data.conversion_label !== ""){ u.data.conversion_label = u.data.conversion_label.replace(/\s/g, "").split(","); }
        if (typeof(u.data.conversion_cookie_prefix) === "string"  && u.data.conversion_cookie_prefix !== ""){ u.data.conversion_cookie_prefix = u.data.conversion_cookie_prefix.replace(/\s/g, "").split(","); }

        if (u.data.order_currency !== u.data.order_currency.toUpperCase()) {
          u.data.order_currency = u.data.order_currency.toUpperCase();
          utag.DB("Currency not supplied in uppercase - automatically converting");
        }

        // Report required config is missing, and stop tag from firing.
        if (!u.data.conversion_id) {
          utag.DB(u.id + ": Tag not fired: Required attribute not populated");
          return;
        }

        // Prepend "AW-" Conversion ID prefix if not present
        for (i = 0; i < u.data.conversion_id.length; i++) {
          if (!/^[a-zA-Z]{2}-/.test(u.data.conversion_id[i]) ) {
            u.data.conversion_id[i] = "AW-" + u.data.conversion_id[i];
          }
        }

        u.data.base_url += "?id=" + u.data.conversion_id[0];
        
        // Support dataLayer renaming
        if (u.data.data_layer_name) {
          u.data.base_url = u.data.base_url + "&l=" + u.data.data_layer_name;
        }

        for (i = 0; i < u.data.conversion_id.length; i++) {
          if (u.data.conversion_cookie_prefix && u.data.conversion_cookie_prefix[i]) {
            u.data.config.conversion_cookie_prefix = u.data.conversion_cookie_prefix[i];
          }
          u.o("config", u.data.conversion_id[i], u.data.config);
        }

        // Set Ecomm site values using e-commerce extension
        if (u.data.product_id.length > 0) {
          u.data.ecomm = u.data.ecomm || {};
          if (u.data.ecomm.prodid === undefined) {
            u.data.ecomm.prodid = u.data.product_id;
          }
          if (u.data.product_category.length > 0 && u.data.ecomm.category === undefined) {
            u.data.ecomm.category = u.data.product_category;
          }
          if (u.data.product_quantity.length > 0 && u.data.ecomm.quantity === undefined) {
            u.data.ecomm.quantity = u.data.product_quantity;
          }
          if (u.data.product_unit_price.length > 0 && u.data.ecomm.pvalue === undefined) {
            u.data.ecomm.pvalue = u.data.product_unit_price;
          }
        }

        u.data.event_data = u.getParams();

        // Combine custom parameters and sites data
        utag.ut.merge(u.data.event_data, u.data.custom, 1);

        // Send Conversion Event if a conversion label is set
        if (u.data.conversion_label) {
          u.data.event_data.send_to = [];
          for (i = 0; i < u.data.conversion_id.length; i++) {
            u.data.event_data.send_to.push(u.data.conversion_id[i] + "/" + (u.data.conversion_label[i] || u.data.conversion_label[0]));
          }
          if (u.data.order_subtotal) {
            u.data.event_data.value = u.data.order_subtotal;
            u.data.event_data.currency = u.data.order_currency;
            u.data.event_data.transaction_id = u.data.order_id;
          }
          
          // Basket data will only be sent during a "purchase" event with a conversion_label present.
          
          u.data.event_data.items = u.getItems();
          u.data.event_data.aw_merchant_id = u.data.aw_merchant_id;
          u.data.event_data.aw_feed_country = u.data.aw_feed_country;
          u.data.event_data.aw_feed_language = u.data.aw_feed_language;
          u.data.event_data.discount = 0;
          for (j = 0; j < u.data.product_discount.length; j++) {
            u.data.event_data.discount += isNaN(parseFloat(u.data.product_discount[j])) ? 0 : parseFloat(u.data.product_discount[j]);
          }

          var containsConversion = false;
          for (i = 0; i < u.data.event.length; i++){
            if (u.data.event[i] === "conversion" || u.data.event[i] === "purchase") {
              containsConversion = true;
            }
          }
          // Add "conversion" event if no event set
          if (!containsConversion && !u.data.event.length) {
            u.data.event.push("conversion");
          }
        }

        // Default to "page_view" event if no event is set
        if (u.toBoolean(u.data.remarketing)) {
          if (!u.data.event.length) {
            u.data.event_data.send_to = u.data.conversion_id;
            u.data.event.push("page_view");
          }
        }
        
        for (i = 0; i < u.data.event.length; i++) {
          u.o("event", u.data.event[i], u.clearEmptyKeys(u.data.event_data));
        }

        if (!u.hasgtagjs()) {
          u.scriptrequested = true;
          utag.ut.gtagScriptRequested = true;
          u.loader({
            "type" : "script",
            "src" : u.data.base_url,
            "cb" : null,
            "loc" : "script",
            "id" : "utag_244",
            "attrs" : {}
          });
        }

        utag.DB("send:244:COMPLETE");
      }
    };
    utag.o[loader].loader.LOAD(id);
  }("244", "vmware.microsites-privacy"));
} catch (error) {
  utag.DB(error);
}
//end tealium universal tag