import { Component, OnInit } from '@angular/core';
import { Auto } from '../../model/auto';
import { AutoService } from '../../services/auto.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-auto',
  templateUrl: './list-auto.component.html',
  styleUrls: ['./list-auto.component.css'],
})
export class ListAutoComponent implements OnInit {
  autoSet!: Auto[];
  autofil!: Auto[];
  idCarro!: string;
  collectionSize!: number;
  searchTerm!: string;
  closeModal!: string;
  msgError = '';
  currentCarro: any;
  currentIndex = -1;

  constructor(
    private autoService: AutoService,
    private modalService: NgbModal
  ) {
    this.getAuto();
  }

  ngOnInit(): void {
    this.refreshList();
  }

  triggerModal(content: any, val: Auto) {
    this.currentCarro = val;
    this.retrieveauto(this.currentCarro.id);
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (res) => {
          this.closeModal = `Closed with: ${res}`;
        },
        (res) => {
          this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  search(value: string): void {
    this.autofil = this.autoSet.filter((val) =>
      val.name.toLowerCase().includes(value)
    );
    this.collectionSize = this.autofil.length;
  }

  getAuto() {
    this.autoService.getAll().subscribe(
      (data) => {
        this.autoSet = data;
        console.log('otra cosa que quiero saber', data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  retrieveauto(val: string): void {
    console.log('Que tiene ', this.currentCarro, 'otra mas ', val);

    this.autoService.get(val).subscribe(
      (data) => {
        this.currentCarro = data;
        console.log(data);
      },
      (error) => {
        this.msgError = error.message + ' \n ' + error.error.message;
        console.log(error);
      }
    );
  }
  deleteAuto(id: string): void {
    this.autoService.delete(id).subscribe(
      (data) => {
        this.refreshList();
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.getAuto();
  }

  updateBook(): void {
    this.autoService.update(this.currentCarro.id, this.currentCarro).subscribe(
      (data) => {
        this.refreshList();
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  setActiveBook(auto: Auto, index: number): void {
    this.currentCarro = auto;
    this.currentIndex = index;
  }
}
