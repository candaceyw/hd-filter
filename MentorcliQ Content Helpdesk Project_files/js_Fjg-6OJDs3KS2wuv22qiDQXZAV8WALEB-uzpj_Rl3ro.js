jQuery(function () {
  ContentHelpdeskFilterEventListeners.register_event_listeners();
  ContentHelpdeskVideoResourceEventListeners.register_event_listeners();
});
;
var ContentHelpdeskFilterEventListeners = function() {

  this.register_event_listeners = function() {
    this.register_search_search_event_listener();
    this.register_program_type_click_event_listener();
    this.register_phase_click_event_listener();
    this.register_resource_type_click_event_listener();
    this.register_tag_click_event_listener();

    this.register_phase_clear_event_listener();
    this.register_program_type_clear_event_listener();
    this.register_tag_clear_event_listener();

  };

  this.register_search_search_event_listener = function() {
    let filter_search_el = jQuery('#content-hd-filter-search');
    filter_search_el.bind("enterKey",function(e){
      ContentHelpdeskFilterUtils.handle_filter_update();
    });
    filter_search_el.keyup(function(e){
      if(e.keyCode == 13) {
        jQuery(this).trigger("enterKey");
      }
    });

    jQuery('#content-hd-filter-search-btn').click(function () {
      ContentHelpdeskFilterUtils.handle_filter_update();
    });
  };

  this.register_program_type_click_event_listener = function() {
    jQuery('input[name="content-hd-filter-program-type"]').click(function () {
      ContentHelpdeskFilterUtils.handle_program_type_check(this);
      ContentHelpdeskFilterUtils.handle_filter_update();
    });
  };

  this.register_phase_click_event_listener = function() {
    jQuery('input[name="content-hd-filter-phase"]').click(function () {
      ContentHelpdeskFilterUtils.handle_filter_update();
    });
  };

  this.register_resource_type_click_event_listener = function() {
    jQuery('input[name="content-hd-filter-resource-type"]').click(function () {
      ContentHelpdeskFilterUtils.handle_filter_update();
    });
  };

  this.register_tag_click_event_listener = function() {
    jQuery('span[name="content-hd-filter-tag"]').click(function () {
      ContentHelpdeskFilterUtils.handle_tag_element_reverse(this);
      ContentHelpdeskFilterUtils.handle_filter_update();
    });
  };

  this.register_phase_clear_event_listener = function() {
    jQuery('#content-hd-filter-phase-uncheck').click(function () {
      ContentHelpdeskFilterUtils.handle_checkbox_group_clear('content-hd-filter-phase');
      ContentHelpdeskFilterUtils.handle_filter_update();
    });
  };

  this.register_program_type_clear_event_listener = function() {
    jQuery('#content-hd-filter-program-type-uncheck').click(function () {
      ContentHelpdeskFilterUtils.handle_checkbox_group_clear('content-hd-filter-program-type');
      ContentHelpdeskFilterUtils.handle_filter_update();
    });
  };

  this.register_tag_clear_event_listener = function () {
    jQuery('#content-hd-filter-tags-uncheck').click(function () {
      ContentHelpdeskFilterUtils.handle_tags_clear('content-hd-filter-tag');
      ContentHelpdeskFilterUtils.handle_filter_update();
    });
  };

};

window.ContentHelpdeskFilterEventListeners = new ContentHelpdeskFilterEventListeners();
;
var ContentHelpdeskVideoResourceEventListeners = function() {

  this.register_event_listeners = function() {
    this.register_video_thumbnail_click_event_listener();
    this.register_video_button_click_event_listener();
  };

  this.register_video_thumbnail_click_event_listener = function() {
    jQuery('[id^="video-thumbnail-"]').click(function () {
      ContentHelpdeskVideoResourceUtils.load_video_player(this.id);
    });
  };

  this.register_video_button_click_event_listener = function() {
    jQuery('[id^="video-button-"]').click(function () {
      ContentHelpdeskVideoResourceUtils.load_video_player(this.id);
    });
  };

};

window.ContentHelpdeskVideoResourceEventListeners = new ContentHelpdeskVideoResourceEventListeners();
;
var ContentHelpdeskVideoResourceUtils = function () {

  this.load_video_player = function(id) {
    let nid = id.split("-")[2];
    let video_player = this.create_video_player_element(nid);
    let dark_background = this.create_dark_background_element();

    document.body.appendChild(dark_background);
    document.body.appendChild(video_player);

    this.show_player();
    document.body.style.overflowY = 'hidden';
    document.body.style.overflowX = 'hidden';
  };

  this.create_video_player_element = function(nid) {
    let video_player = document.createElement('div');
    video_player.id = 'video-player';
    video_player.className = "content-helpdesk-video-player";
    video_player.innerHTML = this.get_video_player_html_markup(nid);

    return video_player;
  };

  this.get_video_player_html_markup = function(nid) {
    let resource = document.getElementById("content-helpdesk-resource-" + nid);
    let title = resource.getAttribute('video-title');
    let file = resource.getAttribute('resource_file');
    let link = resource.getAttribute('resource_link');
    let description = resource.getAttribute('resource_description');
    let tags = resource.getAttribute('help_content_tag');

    let video_tag = '';
    if (!link) {
      video_tag = "<video id='video' class='content-helpdesk-video-container' controls>" +
        "<source src=" + file + " type='video/mp4'></video>";
    } else {
      video_tag = "<iframe id='video' class='content-helpdesk-video-container' " +
        "src=" + link + " frameborder='0' allow='autoplay;' allowfullscreen></iframe>";
    }

    return video_tag +
      "<div class='media-body content-helpdesk-video-body'>" +
      "      <h4><strong>" + title + "</strong>" + "</h4>" +
      "      <hr>" +
      "      <div class='content-helpdesk-video-description'>" + description + "</div>" +
      "      <hr>" +
      "      <p class='content-helpdesk-video-tags'>" +
      "      <strong>Tags: </strong>" + tags + "</p>" +
      "</div>";
  };

  this.show_player = function() {
    document.getElementById("video-player").style.display = 'block';
    document.getElementById("dark-background").style.display = 'block';
  };

  this.unload_video_player = function() {
    let video_player = document.getElementById("video-player");
    let dark_background = document.getElementById("dark-background");
    video_player.parentNode.removeChild(video_player);
    dark_background.parentNode.removeChild(dark_background);
    document.body.style.overflowY = 'auto';
    document.body.style.overflowX = 'auto';
  };

  this.create_dark_background_element = function() {
    let dark_background = document.createElement('div');
    dark_background.id = 'dark-background';
    dark_background.className = "content-helpdesk-dark-background";
    dark_background.addEventListener('click', this.unload_video_player);

    return dark_background;
  };

};

window.ContentHelpdeskVideoResourceUtils = new ContentHelpdeskVideoResourceUtils();
;
var ContentHelpdeskFilterUtils = function() {

  let is_search_filter_pass = function(scope) {
    let resource_name = scope.getAttribute('resource_name').toLowerCase();
    let resource_description = scope.getAttribute('resource_description').toLowerCase();
    let resource_name_filter_val = jQuery('#content-hd-filter-search').val().toLowerCase();
    return resource_name_filter_val == '' ||
      resource_name.indexOf(resource_name_filter_val) >= 0 ||
      resource_description.indexOf(resource_name_filter_val) >= 0;
  };

  let is_program_type_filter_pass = function(scope) {
    let attribute_value = scope.getAttribute('program_type').toLowerCase();
    attribute_value = attribute_value.split(',');
    return is_checkbox_group_filter_pass(scope, attribute_value, 'content-hd-filter-program-type');
  };

  let is_mentoring_phase_filter_pass = function(scope) {
    let attribute_value = scope.getAttribute('mentoring_phase').toLowerCase();
    attribute_value = attribute_value.split(',');
    return is_checkbox_group_filter_pass(scope, attribute_value, 'content-hd-filter-phase');
  };

  let is_resource_type_filter_pass = function(scope) {
    let attribute_value = [scope.getAttribute('resource_type').toLowerCase()];
    return is_checkbox_group_filter_pass(scope, attribute_value, 'content-hd-filter-resource-type');
  };

  let is_tag_filter_pass = function(scope) {
    let attribute_value = scope.getAttribute('help_content_tag').toLowerCase();
    attribute_value = attribute_value.split(', ');
    let selected_tag_names = [];
    jQuery('span[name="content-hd-filter-tag"][selected="selected"]').each(function() {
      selected_tag_names.push(jQuery(this).attr('value').toLowerCase());
    });
    return selected_tag_names.length == 0 || selected_tag_names.every(function(val) {
      return attribute_value.indexOf(val) !== -1;
    });
  };

  let is_checkbox_group_filter_pass = function(scope, attribute_value, checkbox_group_name) {
    let checkbox_group_name_checked = [];
    jQuery('input[name="' + checkbox_group_name + '"]:checked').each(function() {
      let checkbox_value = jQuery(this).val().toLowerCase();
      checkbox_group_name_checked.push(checkbox_value);
    });
    return checkbox_group_name_checked.length == 0 || checkbox_group_name_checked.some(function(val) {
      return attribute_value.indexOf(val) !== -1;
    });
  };

  this.handle_checkbox_group_clear = function(checkbox_group_name) {
    jQuery('input[name="' + checkbox_group_name + '"]').each(function() {
      this.checked = false;
    });
  };

  this.handle_tags_clear = function(tag_name) {
    jQuery('span[name="' + tag_name + '"]').each(function() {
      ContentHelpdeskFilterUtils.handle_tag_element_clear(this);
    });
  };

  this.handle_program_type_check = function(scope) {
    let program_type_checkbox = jQuery(scope);
    if (program_type_checkbox.attr('is_parent') == '1') {
      let program_checkbox_name = program_type_checkbox.attr('name');
      let program_checkbox_checked = program_type_checkbox.prop('checked');
      let selected_value = program_type_checkbox.val();
      let values = selected_value.split(',');
      values.forEach(function(item, index) {
        let child_checkbox = jQuery('input[name="' + program_checkbox_name + '"][value="' + item + '"]');
        child_checkbox.prop('checked', program_checkbox_checked);
      });
    } else {
      this.handle_program_type_parent_check(program_type_checkbox);
    }
  };

  this.handle_program_type_parent_check = function(program_type_checkbox) {
    let program_checkbox_name = program_type_checkbox.attr('name');
    let program_checkbox_parent_value = program_type_checkbox.attr('parent_value');
    let values = program_checkbox_parent_value.split(',');
    let peers_checked = [];

    values.forEach(function(item, index) {
      let child_checkbox = jQuery('input[name="' + program_checkbox_name + '"][value="' + item + '"][is_parent="0"]');
      peers_checked.push(child_checkbox.prop('checked'));
    });
    let parent_checkbox = jQuery('input[name="' + program_checkbox_name + '"][value="' + program_checkbox_parent_value + '"][is_parent="1"]');
    let all_true = peers_checked.every(function(val) {
      return val === true;
    });
    parent_checkbox.prop('checked', all_true);
  };

  this.handle_tag_element_reverse = function(scope) {
    if (jQuery(scope).attr('selected') == 'selected') {
      this.handle_tag_element_clear(scope);
    } else {
      this.handle_tag_element_selected(scope);
    }
  };

  this.handle_tag_element_clear = function(scope) {
    jQuery(scope).addClass('badge-not-selected');
    jQuery(scope).attr('selected', false);
  };

  this.handle_tag_element_selected = function(scope) {
    jQuery(scope).removeClass('badge-not-selected');
    jQuery(scope).attr('selected', 'selected');
  };

  this.show_no_results_element = function() {
    jQuery('#suggest-resource').hide();
    jQuery('#no-results').show();
  };

  this.show_suggest_resource_element = function() {
    jQuery('#suggest-resource').show();
    jQuery('#no-results').hide();
  };

  this.update_tags_counts = function(all_tags) {
    let tags_counts = this.count_available_tags();
    let tags_names_sorted = this.sort_alphabetically(tags_counts);
    tags_names_sorted = this.sort_numerically(tags_names_sorted);

    let selected_tags_names = [];
    let selected_tags = jQuery('span[name="content-hd-filter-tag"][selected="selected"]').each(function() {
      selected_tags_names.push(this.getAttribute('value'));
    });

    if (Object.keys(tags_counts).length === 0 && selected_tags_names.length !== 0) {
      selected_tags.attr('selected', false);
      this.handle_filter_update();
      return;
    }

    let current_tags = jQuery('span[name="content-hd-filter-tag"]');
    let tags_parent = current_tags.parent();
    current_tags.remove();

    this.add_available_tags(tags_names_sorted, selected_tags_names, tags_counts, tags_parent);
    this.add_disabled_tags(all_tags, tags_counts, tags_parent);
  };

  this.add_available_tags = function(tags_names_sorted, selected_tags_names, tags_counts, tags_parent) {
    tags_names_sorted.forEach(function(tag) {
      let tag_markup = '';
      if (selected_tags_names.indexOf(tag) != -1) {
        tag_markup = '<span name="content-hd-filter-tag" class="badge content-helpdesk-tag" selected="selected" value="' + tag + '">' + tag + ' <em>' + tags_counts[tag] + '</em></span>';
      } else {
        tag_markup = '<span name="content-hd-filter-tag" class="badge badge-not-selected content-helpdesk-tag" value="' + tag + '">' + tag + ' <em>' + tags_counts[tag] + '</em></span>';
      }
      jQuery(tags_parent).append(jQuery(tag_markup).click(function() {
        ContentHelpdeskFilterUtils.handle_tag_element_reverse(this);
        ContentHelpdeskFilterUtils.handle_filter_update();
      }));
    });
  };

  this.add_disabled_tags = function(all_tags, tags_counts, tags_parent) {
    all_tags.forEach(function(tag) {
      if (!tags_counts[tag]) {
        let tag_markup = '<span name="content-hd-filter-tag" class="badge badge-not-selected content-helpdesk-tag disabled-tag" value="' + tag + '">' + tag + '</span>';
        jQuery(tags_parent).append(tag_markup);
      }
    });
  };

  this.sort_alphabetically = function(tags_counts) {
    let tags_names_sorted = Object.keys(tags_counts).sort();
    let tags_counts_sorted = {};

    tags_names_sorted.forEach(function(tag) {
      tags_counts_sorted[tag] = tags_counts[tag];
    });

    return tags_counts_sorted;
  };

  this.sort_numerically = function(tags_count_sorted) {
    return Object.keys(tags_count_sorted).sort(function(tag_name1, tag_name2) {
      return tags_count_sorted[tag_name2] - tags_count_sorted[tag_name1];
    });
  };

  this.count_available_tags = function() {
    let tags_count = {};
    jQuery('li[id^="content-helpdesk-resource-"]:visible').each(function() {
      let attribute_value = this.getAttribute('help_content_tag');
      attribute_value = attribute_value.split(', ');
      attribute_value.forEach(function(tag) {
        if (tag in tags_count) {
          tags_count[tag]++;
        } else {
          tags_count[tag] = 1;
        }
      });
    });

    return tags_count;
  };

  this.get_all_tags = function() {
    let all_tags = [];
    jQuery('span[name="content-hd-filter-tag"]').each(function() {
      all_tags.push(this.getAttribute('value'));
    });
    all_tags.sort();

    return all_tags;
  };

  this.filter_resources = function() {
    jQuery('li[id^="content-helpdesk-resource-"]').each(function() {
      if (is_search_filter_pass(this) &&
        is_program_type_filter_pass(this) &&
        is_mentoring_phase_filter_pass(this) &&
        is_resource_type_filter_pass(this) &&
        is_tag_filter_pass(this)) {
        jQuery(this).show();
      } else {
        jQuery(this).hide();
      }
    });
  };

  this.handle_filter_update = function() {
    this.filter_resources();
    this.update_tags_counts(this.get_all_tags());

    if (jQuery('li[id^="content-helpdesk-resource-"]:visible').length == 0) {
      this.show_no_results_element();
    } else {
      this.show_suggest_resource_element();
    }
  };
};

window.ContentHelpdeskFilterUtils = new ContentHelpdeskFilterUtils();
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox') && (Drupal.settings.googleanalytics.trackColorbox)) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Downloads",
            "eventAction": Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(),
            "eventLabel": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", {
            "hitType": "pageview",
            "page": Drupal.googleanalytics.getPageUrl(this.href),
            "transport": "beacon"
          });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", {
            "hitType": "event",
            "eventCategory": "Mails",
            "eventAction": "Click",
            "eventLabel": this.href.substring(7),
            "transport": "beacon"
          });
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode !== 2 || (Drupal.settings.googleanalytics.trackDomainMode === 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", {
              "hitType": "event",
              "eventCategory": "Outbound links",
              "eventAction": "Click",
              "eventLabel": this.href,
              "transport": "beacon"
            });
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga("send", {
        "hitType": "pageview",
        "page": location.pathname + location.search + location.hash
      });
    };
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  if (Drupal.settings.googleanalytics.trackColorbox) {
    $(document).bind("cbox_complete", function () {
      var href = $.colorbox.element().attr("href");
      if (href) {
        ga("send", {
          "hitType": "pageview",
          "page": Drupal.googleanalytics.getPageUrl(href)
        });
      }
    });
  }

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, https://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - https://mydomain.com/node/1 -> /node/1
 * - https://example.com/foo/bar -> https://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
