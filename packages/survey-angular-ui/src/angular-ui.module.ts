import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SurveyComponent } from "./survey.component";
import { PageComponent } from "./page.component";
import { QuestionComponent } from "./question.component";
import { QuestionContentComponent } from "./question-content.component";
import { StringViewerComponent } from "./string-viewer.component";
import { PopupComponent } from "./components/popup/popup.component";
import { PopupContainerComponent } from "./components/popup/popup-container.component";
import { QuestionSkeletonComponent } from "./components/skeleton.component";
import { DropdownComponent } from "./components/dropdown.component";
import { DropdownSelectComponent } from "./components/dropdown-select.component";
import { TextQuestionComponent } from "./questions/text.component";
import { HtmlQuestionComponent } from "./questions/html.component";
import { RadiogroupComponent } from "./questions/radiogroup.component";
import { RadiogroupItemComponent } from "./questions/radiogroup-item.component";
import { CheckboxComponent } from "./questions/checkbox.component";
import { CheckboxItemComponent } from "./questions/checkbox-item.component";
import { DropdownQuestionComponent } from "./questions/dropdown.component";
import { RatingQuestionComponent } from "./questions/rating.component";
import { BooleanQuestionComponent } from "./questions/boolean.component";
import { ImagePickerItemComponent } from "./questions/imagepicker-item.component";
import { ImagePickerQuestionComponent } from "./questions/imagepicker.component";

import { ActionBarComponent } from "./components/action-bar/action-bar.component";
import { ActionComponent } from "./components/action-bar/action.component";
import { ActionBarItemComponent } from "./components/action-bar/action-bar-item.component";
import { ActionBarItemDropdownComponent } from "./components/action-bar/action-bar-item-dropdown.component";
import { SelectBaseItemComponent } from "./questions/selectbase-item";
import { SelectBaseComponent } from "./questions/selectbase.component";
import { SurveyCommentComponent } from "./comment.component";
import { ElementHeaderComponent } from "./components/element-header/element-header.component";
import { ElementTitleComponent } from "./components/element-title/element-title.component";
import { SurveyHeaderComponent } from "./components/survey-header/survey-header.component";

import { DynamicHeadComponent } from "./components/element-title/dynamic-head.component";
import { ListComponent } from "./components/list/list.component";
import { ListItemComponent } from "./components/list/list-item.component";
import { RowComponent } from "./row.component";
import { RatingDropdownComponent } from "./components/renderAs/rating-dropdown/rating-dropdown.component";
import { BooleanCheckboxComponent } from "./components/renderAs/boolean-checkbox/boolean-checkbox.component";
import { BooleanRadioComponent } from "./components/renderAs/boolean-radio/boolean-radio.component";
import { BooleanRadioItemComponent } from "./components/renderAs/boolean-radio/boolean-radio-item.component";
import { ProgressDefaultComponent } from "./components/progress/default/progress.component";
import { ProgressButtonsComponent } from "./components/progress/buttons/progress.component";
import { ProgressComponent } from "./components/progress/progress.component";
import { PanelComponent } from "./panel.component";
import { ElementComponent } from "./element.component";
import { PopupService } from "./components/popup/popup.service";
import { SurveyNavigationButton } from "./components/survey-actions/survey-nav-btn.component";
import { MatrixQuestionComponent } from "./questions/matrix.component";
import { SvgIconComponent } from "./components/svg-icon/svg-icon.component";
import { FileQuestionComponent, } from "./questions/file.component";
import { VisibleDirective } from "./utils/ng-show.directive";
import { SafeUrlPipe } from "./utils/safe-url.pipe";
import { CommentQuestionComponent } from "./questions/comment.component";
import { SignaturePadQuestionComponent } from "./questions/signature.component";
import { MultipleTextComponent } from "./questions/multipletext.component";
import { ErrorsComponent } from "./errors.component";
import { MultipleTextItemComponent } from "./questions/multipletextitem.component";
@NgModule({
  declarations: [
    SurveyComponent, PageComponent, ElementComponent, PanelComponent, QuestionComponent, QuestionContentComponent, StringViewerComponent,
    QuestionSkeletonComponent, TextQuestionComponent, RadiogroupComponent, RadiogroupItemComponent, CheckboxComponent, CheckboxItemComponent,
    DropdownComponent, DropdownQuestionComponent, DropdownSelectComponent,
    PopupComponent, PopupContainerComponent,
    ListComponent, ListItemComponent,
    ActionBarComponent, ActionComponent, ActionBarItemComponent, ActionBarItemDropdownComponent, HtmlQuestionComponent,
    SelectBaseItemComponent, SelectBaseComponent, SurveyCommentComponent, ElementHeaderComponent, ElementTitleComponent, DynamicHeadComponent, RowComponent,
    RatingQuestionComponent, RatingDropdownComponent, BooleanQuestionComponent, BooleanCheckboxComponent, BooleanRadioComponent, BooleanRadioItemComponent, ImagePickerItemComponent, ImagePickerQuestionComponent,
    SurveyHeaderComponent, ProgressDefaultComponent, ProgressComponent, ProgressButtonsComponent, SurveyNavigationButton, MatrixQuestionComponent, SvgIconComponent, FileQuestionComponent, SafeUrlPipe, VisibleDirective, CommentQuestionComponent, SignaturePadQuestionComponent, ErrorsComponent,
    MultipleTextComponent, MultipleTextItemComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    SurveyComponent
  ],
  providers: [PopupService],
})
export class SurveyAngularModule { }
