import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource,MatSort,MatPaginator } from "@angular/material";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PromoService } from 'src/app/shared/promo.service';
import { PromocodeComponent } from '../promocode/promocode.component';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent implements OnInit {

  constructor(private service: PromoService,private dialog: MatDialog){}
  listData: MatTableDataSource<any>;
  displayedColumns: string[] =[`#`, `promocode`,`discount`,'actions'];
  
  
  @ViewChild(MatSort,{static: true}) sort: MatSort;
  @ViewChild(MatPaginator,{static: true}) paginator: MatPaginator;
  searchKey: string;

  ngOnInit() {
    this.service.getPromocodes().subscribe(
      list => {
        let array = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      }
    );
  }

  onSearchclear(){
    this.searchKey = "";
    this.applyfilter();
  }

  oncreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(PromocodeComponent,dialogConfig);
  }

  applyfilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();

  }

  onedit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus= true;
    dialogConfig.width = "60%";
    this.dialog.open(PromocodeComponent,dialogConfig);
  }

  ondelete($key){
    this.service.deletePromocode($key);

  }

}