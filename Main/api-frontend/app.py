from flask import Flask, render_template, request, redirect, url_for, flash
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Replace with a secure key
app.config['UPLOAD_FOLDER'] = 'uploads/'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16 MB upload limit

# Ensure upload directory exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/job-notes', methods=['GET', 'POST'])
def job_notes():
    if request.method == 'POST':
        job_notes = request.form.get('job_notes')
        # Here, you would typically save the job_notes to a database
        print('Submitting job notes:', job_notes)
        flash('Job notes submitted successfully!', 'success')
        return redirect(url_for('job_notes'))
    return render_template('job_notes.html')

@app.route('/house-details', methods=['GET', 'POST'])
def house_details():
    if request.method == 'POST':
        # Handle form submission for house details
        # Example: address, size, etc.
        flash('House details submitted successfully!', 'success')
        return redirect(url_for('house_details'))
    return render_template('house_details.html')

@app.route('/cosy-glazing-quotation', methods=['GET', 'POST'])
def cosy_glazing_quotation():
    if request.method == 'POST':
        # Handle submission of Cosy Glazing Quotation
        # Process the form data received
        flash('Cosy Glazing Quotation submitted successfully!', 'success')
        return redirect(url_for('cosy_glazing_quotation'))
    return render_template('cosy_glazing_quotation.html')

@app.route('/draughts-quotation', methods=['GET', 'POST'])
def draughts_quotation():
    if request.method == 'POST':
        # Handle submission of Draughts Quotation
        flash('Draughts Quotation submitted successfully!', 'success')
        return redirect(url_for('draughts_quotation'))
    return render_template('draughts_quotation.html')

@app.route('/restoration-work', methods=['GET', 'POST'])
def restoration_work():
    if request.method == 'POST':
        # Handle submission of Restoration Work
        flash('Restoration Work submitted successfully!', 'success')
        return redirect(url_for('restoration_work'))
    return render_template('restoration_work.html')

@app.route('/loft-insulation', methods=['GET', 'POST'])
def loft_insulation():
    if request.method == 'POST':
        # Handle submission of Loft Insulation
        flash('Loft Insulation submitted successfully!', 'success')
        return redirect(url_for('loft_insulation'))
    return render_template('loft_insulation.html')

@app.route('/loft-flooring', methods=['GET', 'POST'])
def loft_flooring():
    if request.method == 'POST':
        # Handle submission of Loft Flooring
        flash('Loft Flooring submitted successfully!', 'success')
        return redirect(url_for('loft_flooring'))
    return render_template('loft_flooring.html')

@app.route('/room-in-roof', methods=['GET', 'POST'])
def room_in_roof():
    if request.method == 'POST':
        # Handle submission of Room in Roof
        flash('Room in Roof submitted successfully!', 'success')
        return redirect(url_for('room_in_roof'))
    return render_template('room_in_roof.html')

@app.route('/other', methods=['GET', 'POST'])
def other():
    if request.method == 'POST':
        # Handle submission of Other
        flash('Other details submitted successfully!', 'success')
        return redirect(url_for('other'))
    return render_template('other.html')

@app.route('/documents', methods=['GET', 'POST'])
def documents():
    if request.method == 'POST':
        if 'document' not in request.files:
            flash('No file part', 'danger')
            return redirect(request.url)
        file = request.files['document']
        if file.filename == '':
            flash('No selected file', 'danger')
            return redirect(request.url)
        if file:
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            flash('Document uploaded successfully!', 'success')
            return redirect(url_for('documents'))
    return render_template('documents.html')

if __name__ == '__main__':
    app.run(debug=True)