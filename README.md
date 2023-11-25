# scraper-widget

**_Forked and customized from the original source: [Surfing Waves RSS Widget](https://surfing-waves.com/feed.htm)_**

The scraper-widget is designed to aggregate, customize, and display RSS / XML data on your website.

View a working example » [linkedin-scraper](https://linkedin-scraper-web.vercel.app/)

## Installation

> [!IMPORTANT]
> Embed only one widget per page.

- Place the code below into your web page.

_The code block provides placeholder optional values that can be changed to modify the widget._

```javascript
<script type="text/javascript">
            rssfeed_url = new Array();
            rssfeed_url[0] = "";
            rssfeed_frame_width = "500";
            rssfeed_frame_height = "300";
            rssfeed_scroll = "on/off";
            rssfeed_scroll_step = "3";
            rssfeed_scroll_bar = "on/off";
            rssfeed_target = "_blank";
            rssfeed_font_size = "16";
            rssfeed_font_face = "Arial, sans-serif";
            rssfeed_border = ""on/off";
            rssfeed_css_url = "/path/to/css";
            rssfeed_title = ""on/off";
            rssfeed_title_name = "title";
            rssfeed_title_bgcolor = "#000";
            rssfeed_title_color = "#fff";
            rssfeed_title_bgimage = "";
            rssfeed_footer = "on/off";
            rssfeed_footer_name = "";
            rssfeed_footer_bgcolor = "#fff";
            rssfeed_footer_color = "#000";
            rssfeed_footer_bgimage = "";
            rssfeed_item_title_length = "100";
            rssfeed_item_title_color = "#000";
            rssfeed_item_bgcolor = "#fff";
            rssfeed_item_bgimage = "";
            rssfeed_item_border_bottom = "on/off";
            rssfeed_item_source_icon = "on/off";
            rssfeed_item_date = "on/off";
            rssfeed_item_description = "on/off";
            rssfeed_item_description_length = "100";
            rssfeed_item_description_color = "#000";
            rssfeed_item_description_link_color = "#000";
            rssfeed_item_description_tag = "on/off";
            rssfeed_no_items = "0";
            rssfeed_cache = "";
</script>

<script type="text/javascript" src="//feed.surfing-waves.com/js/rss-feed.js"></script>
```

- Modify the following fields:

  - **`rssfeed_url[]`** fields can support up to 5 URLs. Add your own RSS / XML URL(s) to aggregate and display data.
    - `rssfeed_url[0] = "https://...";`, `rssfeed_url[1] = "https://...";`,...

  - **`rssfeed_cache`** field is used to cache widget data. Use a new cache found [here](https://surfing-waves.com/feed.htm).

The rest of the fields can be modified and customized based on your preference.

### Optional Customization

The following script added in the previous code block can also be extracted and deployed locally to avoid the need to have a path to an external source.

```javascript
<script type="text/javascript" src="//feed.surfing-waves.com/js/rss-feed.js"></script>
```

View [/app.js](https://github.com/stefanicjuraj/scraper-widget/blob/main/app.js) for an example of the extracted JavaScript code file. Once the file is extracted and deployed locally, modify the script path to your JavaScript code file.

```javascript
<script type="text/javascript" src="https://scraper-widget.vercel.app/app.js"></script>
```


