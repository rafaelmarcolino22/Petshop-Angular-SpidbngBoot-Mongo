import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  titulo: String = "Todos os clientes"

  listData: any = [];
  dados: any = [];

  constructor(
    public service : UsersService
  ) { }

  ngOnInit(): void {

    this.listUsers()
  }


  listUsers(){
     this.service.getAllusers().subscribe((data: {}) => {
      this.listData = data;
      this.dados = data
    })
  }


  deleteUser(id: any){
    if(window.confirm("Deseja excluir o cliente ")){
      
    this.service.deleteUsers(id).subscribe(() => {
      this.listUsers()
    })
    }
  }






}
