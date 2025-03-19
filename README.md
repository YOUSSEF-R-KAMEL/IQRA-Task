# 🚀 IQRA Task - Dynamic Form Application

### 🚀 Overview
IQRA Task is an Angular-based dynamic form application that allows users to create and manage forms dynamically. It supports various field types (text, email, password, select, checkbox, and repeatable fields) and includes features like state persistence and toast notifications for a seamless user experience.

---

## ✨ Features

✅ **Dynamic Form Generation** – Create forms dynamically based on a provided schema.  
✅ **Field Types** – Supports text, email, password, select, checkbox, and repeatable fields.  
✅ **State Persistence** – Saves form progress to local storage and restores it on page reload.  
✅ **Toast Notifications** – Displays success, error, and info notifications using `ngx-toastr`.  
✅ **Validation** – Includes custom validators for required fields, minimum length, and email format.  
✅ **Repeatable Fields** – Allows users to add or remove repeatable fields (e.g., hobbies).  

---

## 🛠️ Tech Stack

- **Frontend:** Angular, TypeScript, SCSS  
- **State Management:** RxJS  
- **UI Framework:** Bootstrap, ngx-toastr  
- **Form Handling:** Angular Reactive Forms  
- **Validation:** Custom validators for dynamic fields  

---

## 📂 Project Structure
iqra-task/
│── src/
│ ├── app/
│ │ ├── components/ # Reusable components (e.g., dynamic form)
│ │ ├── services/ # Services for form handling and state management
│ │ ├── shared/ # Shared utilities and validators
│ │ ├── environments/ # Environment configurations
│── angular.json # Angular project configuration
│── package.json # Dependencies & scripts
│── README.md # Project documentation like this

Copy

---

## 📌 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUSSEF-R-KAMEL/IQRA-Task.git
cd IQRA-Task
2️⃣ Install Dependencies
bash
Copy
npm install
3️⃣ Run the Development Server
bash
Copy
ng serve
Then open http://localhost:4200/ in your browser.

4️⃣ Build for Production
bash
Copy
ng build --configuration production
🎯 Usage
Form Schema
The form is generated based on a schema provided to the DynamicFormComponent. Here's an example schema:

json
Copy
{
  "fields": [
    {
      "name": "fullName",
      "label": "Full Name",
      "type": "text",
      "placeholder": "Enter your full name",
      "validators": {
        "required": true,
        "minLength": 3
      }
    },
    {
      "name": "email",
      "label": "Email",
      "type": "email",
      "placeholder": "Enter your email",
      "validators": {
        "required": true,
        "email": true
      }
    },
    {
      "name": "hobbies",
      "label": "Hobbies",
      "type": "repeatable",
      "subFields": [
        {
          "name": "hobby",
          "label": "Hobby",
          "type": "text",
          "placeholder": "Enter a hobby"
        }
      ],
      "validators": {
        "required": true
      }
    }
  ]
}
Adding a New Field
To add a new field to the form, update the schema with the desired field configuration. For example, to add a checkbox field:

json
Copy
{
  "name": "subscribe",
  "label": "Subscribe to Newsletter",
  "type": "checkbox"
}
Clearing Saved Progress
Click the Clear Saved Progress button to reset the form and clear the saved state from local storage.

Submitting the Form
Once all required fields are filled out correctly, click the Submit button to submit the form. A success toast notification will be displayed.

📞 Contact
For any inquiries, reach out:

GitHub: YOUSSEF-R-KAMEL

Email: youssefrafat70@gmail.com

Made with ❤️ by Youssef Rafat Kamel
