!(function () {
    var e = window,
        s = "";
    for (i = 0; i < e.rssfeed_url.length; i++) s = s + "rssfeed[url][" + i + "]=" + encodeURIComponent(e.rssfeed_url[i]) + "&";
    var r =
        ("https:" == document.location.protocol ? "https" : "http") +
        "://feed.surfing-waves.com/php/rssfeed.php" +
        "?" +
        s +
        "rssfeed[type]=" +
        (e.rssfeed_type ? e.rssfeed_type : "") +
        "&rssfeed[frame_width]=" +
        e.rssfeed_frame_width +
        "&rssfeed[frame_height]=" +
        e.rssfeed_frame_height +
        "&rssfeed[scroll]=" +
        (e.rssfeed_scroll ? e.rssfeed_scroll : "") +
        "&rssfeed[scroll_step]=" +
        (e.rssfeed_scroll_step ? e.rssfeed_scroll_step : "") +
        "&rssfeed[scroll_bar]=" +
        (e.rssfeed_scroll_bar ? e.rssfeed_scroll_bar : "") +
        "&rssfeed[target]=" +
        (e.rssfeed_target ? e.rssfeed_target : "") +
        "&rssfeed[font_size]=" +
        (e.rssfeed_font_size ? e.rssfeed_font_size : "") +
        "&rssfeed[font_face]=" +
        (e.rssfeed_font_face ? e.rssfeed_font_face : "") +
        "&rssfeed[border]=" +
        (e.rssfeed_border ? e.rssfeed_border : "") +
        "&rssfeed[css_url]=" +
        (e.rssfeed_css_url ? encodeURIComponent(e.rssfeed_css_url) : "") +
        "&rssfeed[title]=" +
        (e.rssfeed_title ? e.rssfeed_title : "") +
        "&rssfeed[title_name]=" +
        (e.rssfeed_title_name ? encodeURIComponent(e.rssfeed_title_name) : "") +
        "&rssfeed[title_bgcolor]=" +
        (e.rssfeed_title_bgcolor ? encodeURIComponent(e.rssfeed_title_bgcolor) : "") +
        "&rssfeed[title_color]=" +
        (e.rssfeed_title_color ? encodeURIComponent(e.rssfeed_title_color) : "") +
        "&rssfeed[title_bgimage]=" +
        (e.rssfeed_title_bgimage ? encodeURIComponent(e.rssfeed_title_bgimage) : "") +
        "&rssfeed[footer]=" +
        (e.rssfeed_footer ? e.rssfeed_footer : "") +
        "&rssfeed[footer_name]=" +
        (e.rssfeed_footer_name ? encodeURIComponent(e.rssfeed_footer_name) : "") +
        "&rssfeed[footer_bgcolor]=" +
        (e.rssfeed_footer_bgcolor ? encodeURIComponent(e.rssfeed_footer_bgcolor) : "") +
        "&rssfeed[footer_color]=" +
        (e.rssfeed_footer_color ? encodeURIComponent(e.rssfeed_footer_color) : "") +
        "&rssfeed[footer_bgimage]=" +
        (e.rssfeed_footer_bgimage ? encodeURIComponent(e.rssfeed_footer_bgimage) : "") +
        "&rssfeed[item_bgcolor]=" +
        (e.rssfeed_item_bgcolor ? encodeURIComponent(e.rssfeed_item_bgcolor) : "") +
        "&rssfeed[item_bgimage]=" +
        (e.rssfeed_item_bgimage ? encodeURIComponent(e.rssfeed_item_bgimage) : "") +
        "&rssfeed[item_title_length]=" +
        (e.rssfeed_item_title_length ? e.rssfeed_item_title_length : "") +
        "&rssfeed[item_title_color]=" +
        (e.rssfeed_item_title_color ? encodeURIComponent(e.rssfeed_item_title_color) : "") +
        "&rssfeed[item_border_bottom]=" +
        (e.rssfeed_item_border_bottom ? e.rssfeed_item_border_bottom : "") +
        "&rssfeed[item_source_icon]=" +
        (e.rssfeed_item_source_icon ? e.rssfeed_item_source_icon : "") +
        "&rssfeed[item_date]=" +
        (e.rssfeed_item_date ? e.rssfeed_item_date : "") +
        "&rssfeed[item_description]=" +
        (e.rssfeed_item_description ? e.rssfeed_item_description : "") +
        "&rssfeed[item_description_length]=" +
        (e.rssfeed_item_description_length ? e.rssfeed_item_description_length : "") +
        "&rssfeed[item_description_color]=" +
        (e.rssfeed_item_description_color ? encodeURIComponent(e.rssfeed_item_description_color) : "") +
        "&rssfeed[item_description_link_color]=" +
        (e.rssfeed_item_description_link_color ? encodeURIComponent(e.rssfeed_item_description_link_color) : "") +
        "&rssfeed[item_description_tag]=" +
        (e.rssfeed_item_description_tag ? e.rssfeed_item_description_tag : "") +
        "&rssfeed[no_items]=" +
        (e.rssfeed_no_items ? e.rssfeed_no_items : "") +
        "&rssfeed[cache]=" +
        (e.rssfeed_cache ? e.rssfeed_cache : "");
    document.write(
        '<iframe name="rssfeed_frame" width="' +
        e.rssfeed_frame_width +
        '" height="' +
        e.rssfeed_frame_height +
        '" frameborder="0" src="' +
        r +
        '" marginwidth="0" marginheight="0" vspace="0" hspace="0" scrolling="no" ALLOWTRANSPARENCY="true"></iframe>'
    );
})();