import { Component, OnInit } from '@angular/core';
import { SuppliesService } from "../../../shared/supplies.service";
import { OrderTypesService } from "../../../shared/order-types.service";
import { NotifcationService } from "../../../shared/notifcation.service";
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {

  constructor(private service: SuppliesService,
    private ordType : OrderTypesService,
    private notificationService : NotifcationService,
    public dialogRef: MatDialogRef <SupplyComponent> ) { }


    ngOnInit() {
      this.service.getSupply();
    }
  
  
  
    onClear() {
      this.service.form.reset();
      this.service.initializeFormGroup();
  
    }
  
    onSubmit(){
      if(this.service.form.valid){
        if (!this.service.form.get('$key').value)
        this.service.insertSupply(this.service.form.value)
        else
        this.service.updateSupply(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success(':: Submitted Succesfully' );
        this.onClose();
      }
  
    }
  
    onClose() {
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.dialogRef.close();
    }
  
  
  }
  
