лабораторная 1

Private Sub TextBox1_Change()

End Sub

Private Sub buttonClear_Click()
result.Caption = ""
End Sub

Private Sub buttonExit_Click()
End
End Sub

Private Sub buttonShow_Click()
If Val(inputWindow.Text) >= 8 And Val(inputWindow.Text) < 12 Then result.Caption = "Äîáðîå óòðî!"
If Val(inputWindow.Text) >= 12 And Val(inputWindow.Text) < 17 Then result.Caption = "Äîáðûé äåíü!"
If Val(inputWindow.Text) >= 17 And Val(inputWindow.Text) < 23 Then result.Caption = "Äîáðûé âå÷åð!"
If Val(inputWindow.Text) >= 23 And Val(inputWindow.Text) <= 24 Or Val(inputWindow.Text) >= 24 And Val(inputWindow.Text) < 8 Then result.Caption = "Äîáðîé íî÷è!"
If Val(inputWindow.Text) > 24 Then result.Caption = "Äîï. èíòåðâàë [0:24]"
End Sub

Private Sub inputWindow_Change()

End Sub

Private Sub result_Click()

End Sub
