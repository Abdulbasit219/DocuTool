from flask import Flask, request, jsonify, send_file
import os, tempfile, re
from flask_cors import CORS
import pikepdf
from pdf2docx import parse
from docx2pdf import convert

app = Flask(__name__)
CORS(app)

def safe_filename(filename):
    name, ext = os.path.splitext(filename)
    name = re.sub(r'[^a-zA-Z0-9_-]', '_', name)
    return f"{name}{ext}"

@app.route('/pdf-to-word', methods=['POST'])
def pdf_to_word():
    try:
        file = request.files.get('file')

        if not file:
            return jsonify({'error': 'File required'}), 400

        if not file.filename.lower().endswith('.pdf'):
            return jsonify({'error': 'Only PDF files allowed'}), 400

        temp_dir = tempfile.gettempdir()

        safe_pdf_name = safe_filename(file.filename)
        safe_docx_name = safe_pdf_name.replace('.pdf', '.docx')

        pdf_path = os.path.join(temp_dir, safe_pdf_name)
        docx_path = os.path.join(temp_dir, safe_docx_name)

        file.save(pdf_path)

        parse(pdf_path, docx_path)

        os.remove(pdf_path)

        return send_file(
            docx_path,
            as_attachment=True,
            download_name=file.filename.replace('.pdf', '.docx')  # original name
        )

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/word-to-pdf', methods=['POST'])
def word_to_pdf():
    try:
        file = request.files.get('file')

        if not file:
            return jsonify({'error': 'File required'}), 400

        if not file.filename.endswith('.docx'):
            return jsonify({'error': 'Only Word (.docx) files allowed'}), 400

        temp_dir = tempfile.gettempdir()
        safe_name = safe_filename(file.filename)
        docx_path = os.path.join(temp_dir, safe_name)
        pdf_path = os.path.join(temp_dir,safe_name.replace('.docx', '.pdf'))

        file.save(docx_path)

        convert(docx_path, pdf_path)

        os.remove(docx_path)

        return send_file(
            pdf_path,
            as_attachment=True,
            download_name=file.filename.replace('.docx', '.pdf')
        )

    except Exception as e:
        print(e)
        return jsonify({'error': str(e)}), 500

@app.route('/encrypt', methods=['POST'])
def encrypt_pdf():
    try:
        file = request.files.get('file')
        password = request.form.get('password')

        if not file or not password:
            return jsonify({'error': 'File and password required'}), 400
        
        temp_dir = tempfile.gettempdir()
        input_path = os.path.join(temp_dir, 'input.pdf')
        output_path = os.path.join(temp_dir, 'encrypted.pdf')

        file.save(input_path)
        
        with pikepdf.open(input_path) as pdf:
            pdf.save(output_path, encryption=pikepdf.Encryption(
                owner=password,
                user=password,
                R=6
            ))
        
        os.remove(input_path)

        return send_file(
            output_path,
            as_attachment=True,
            download_name=f'encrypted_{file.filename}'
        )


    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)