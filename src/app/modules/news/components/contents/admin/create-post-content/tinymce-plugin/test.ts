import { Editor } from 'tinymce';

const myCustomPlugin = (editor: Editor) => {
      editor.ui.registry.addButton('mycustombutton', {
            text: 'My Custom Button',
            onAction: () => {
                  editor.insertContent('Hello from My Custom Plugin!');
            },
      });

      // Đăng ký nút vào thanh công cụ
};

export default myCustomPlugin;
