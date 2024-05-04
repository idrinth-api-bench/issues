# @idrinth-api-bench/api-bench/mindmap

This mindmap is hosted [here](https://mindmap.idrinth-api-ben.ch).

To add to or edit the mindmap, have a look at the data.yml file. It is made up
of nodes - the single elements - that all start from the root node.

Node can contain five elements: text, description, URL, image and children.
Text is required to actually be able to display the node, while all other
fields are optional. If children is set, these child nodes will be connected
to their parent, if URL is set, the node will contain a link to that URL.
If an image is given, it will be shown with the node.

Use children to break apart a point and use the URL if there is a source of
information for that specific topic, or it otherwise makes sense.

Use the description field to add additional information that is shown when
hovering over the node.
