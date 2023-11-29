import { Editor } from "tinymce";

export const MyPlugin = (editor) => {
      // Đăng ký nút trong thanh công cụ
      editor.ui.registry.addButton("myPlugin", {
            text: "My Plugin",
            onAction: () => {
                  // Xử lý khi nút được nhấp
                  editor.insertContent("Hello from My Plugin!");
            },
      });

      // Đăng ký lệnh tùy chỉnh
      editor.addCommand("myCommand", () => {
            // Xử lý khi lệnh được gọi
            editor.insertContent("Hello from My Command!");
      });
};
