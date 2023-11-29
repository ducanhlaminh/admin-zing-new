tinymce.PluginManager.add("example", (editor: any, url: any) => {
      editor.ui.registry.addMenuButton("myCustomToolbarButton", {
            text: "Cách lề",
            fetch: (callback: any) => {
                  const items = [
                        {
                              type: "menuitem",
                              text: "0px",
                              onAction: () => {
                                    tinymce.activeEditor.formatter.toggle(
                                          "custom_format1"
                                    );
                              },
                        },
                        {
                              type: "menuitem",
                              text: "Tiêu chuẩn",
                              onAction: () => {
                                    tinymce.activeEditor.formatter.toggle(
                                          "custom_format2"
                                    );
                              },
                        },
                  ];
                  callback(items);
            },
      });
      editor.ui.registry.addButton("mycustombutton", {
            icon: "image",
            onAction: () => {
                  // Mở dialog
                  this.openDialog();
            },
      });
      editor.ui.registry.addButton("cropimage", {
            icon: "crop",
            onAction: (e: any) => {
                  console.log(e);

                  // Mở dialog
                  this.openDialogCrop();
            },
      });
      editor.ui.registry.addButton("overview", {
            icon: "preview",
            onAction: (e: any) => {
                  console.log(e);

                  // Mở dialog
            },
      });
});
