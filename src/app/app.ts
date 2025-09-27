 import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  age: number;
  country: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  users: User[] = [
    { id: 1, name: 'Tarun', age: 25, country: 'India' },
    { id: 2, name: 'Patel', age: 28, country: 'UK' }
  ];

  formData: Partial<User> = {};
  isEditing = false;

  addUser() {
    if (!this.formData.name || !this.formData.age || !this.formData.country) {
      alert('Fill all fields');
      return;
    }
    const newUser: User = {
      id: this.users.length ? this.users[this.users.length - 1].id + 1 : 1,
      name: this.formData.name,
      age: Number(this.formData.age),
      country: this.formData.country
    };
    this.users.push(newUser);
    this.formData = {};
  }

  editUser(user: User) {
    this.isEditing = true;
    this.formData = { ...user };
  }

  updateUser() {
    this.users = this.users.map(u =>
      u.id === this.formData.id ? { ...u, ...this.formData } as User : u
    );
    this.isEditing = false;
    this.formData = {};
  }

  cancelEdit() {
    this.isEditing = false;
    this.formData = {};
  }

  deleteUser(id: number) {
    if (confirm('Delete this user?')) {
      this.users = this.users.filter(u => u.id !== id);
      if (this.isEditing && this.formData.id === id) this.cancelEdit();
    }
  }
}
