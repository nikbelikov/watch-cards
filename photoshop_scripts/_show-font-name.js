#target photoshop
#script "Show Font Name"
#strict on

app.bringToFront(); // just in case
if (app.activeDocument.activeLayer.kind != LayerKind.TEXT)
    alert("Active layer is not a text layer. \nMake the desired text layer active before invoking the \"Show Font Name\" script.");
else
{
    alert("The internal name for the font of the currently-active layer is \"" + app.activeDocument.activeLayer.textItem.font + "\"");
    // app.activeDocument.activeLayer.textItem.contents = app.activeDocument.activeLayer.textItem.font;
}
