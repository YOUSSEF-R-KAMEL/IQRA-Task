## 🚀 Dynamic Form Application

### 📌 Overview
IQRA Task is a modern, dynamic form application built with Angular that enables users to create and manage forms dynamically. It supports multiple field types, state persistence, and interactive notifications for an enhanced user experience.

---

### 🎯 Features
✅ **Dynamic Form Generation** – Forms are generated based on a provided schema.  
✅ **Multiple Field Types** – Supports text, email, password, select, checkbox, and repeatable fields.  
✅ **State Persistence** – Saves progress in local storage and restores on reload.  
✅ **Real-Time Validation** – Custom validators ensure proper input handling.  
✅ **Toast Notifications** – Displays feedback messages using `ngx-toastr`.  
✅ **Repeatable Fields** – Allows users to add/remove repeatable fields (e.g., hobbies).  

---

### 🛠️ Tech Stack
- **Frontend:** Angular, TypeScript, SCSS  
- **State Management:** RxJS  
- **UI Framework:** Bootstrap, ngx-toastr  
- **Form Handling:** Angular Reactive Forms  
- **Validation:** Custom dynamic field validators  

---

### 📂 Project Structure
```
iqra-task/
│── src/
│   ├── app/
│   │   ├── components/  # Reusable components (e.g., dynamic form)
│   │   ├── services/    # Services for form handling and state management
│   │   ├── shared/      # Shared utilities and validators
│── angular.json         # Angular project configuration
│── package.json         # Dependencies & scripts
│── README.md            # Project documentation like this
```

---

### 📌 Installation & Setup

#### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YOUSSEF-R-KAMEL/IQRA-Task.git
cd IQRA-Task
```

#### 2️⃣ Install Dependencies
```bash
npm install
```

#### 3️⃣ Run the Development Server
```bash
ng serve
```
Then open `http://localhost:4200/` in your browser.

#### 4️⃣ Build for Production
```bash
ng build --configuration production
```

---

### 🎯 Usage

#### 📌 Form Schema
The form is generated based on a JSON schema provided to the `DynamicFormComponent`. Below is an example:

```json
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
```

#### ➕ Adding a New Field
To add a new field, modify the schema with the desired field configuration. Example of adding a checkbox:

```json
{
  "name": "subscribe",
  "label": "Subscribe to Newsletter",
  "type": "checkbox"
}
```

#### 🗑️ Clearing Saved Progress
Click the **Clear Saved Progress** button to reset the form and remove saved data from local storage.

#### ✅ Submitting the Form
Once all required fields are correctly filled, click **Submit** to complete the process. A success toast notification will confirm the submission.

---

### 📞 Contact
For any inquiries, reach out:
- **GitHub:** [YOUSSEF-R-KAMEL](https://github.com/YOUSSEF-R-KAMEL)
- **Email:** se.youssefrafat@gmail.com

Made with ❤️ by Youssef Rafat Kamel
