    <script type="text/template" id="page-popup">

            <div class="modal-dialog">
                    <div class="modal-content">
                    <form id="aa" action="#">
                            <div class="modal-header">
                            <h4>My heading</h4>
                            </div>
                            <div class="modal-body">
                            <div class="row">
                                    <div class="col-xs-8">
                                         <div class="form-group">
                                                <label class="form-label" for="">Slug</label>
                                                <input type="text" id="slug" class="form-control" value="<%=slug%>"/>
                                        </div>
                                   
                                    </div>
                                    <div class="col-xs-4">
                                        <div class="form-group">
                                                <label class="form-label" for="">Type</label>
                                                <select class="form-control" id="type">
                                                <option value="markdown">Markdown</option>
                                                </select>
                                        </div>
                                    </div>
                            </div>
<div class="form-group">
        <label class="form-label" for="">Content</label>
        <textarea class="form-control" name="" cols="30" rows="10" id="page-content"><%=content%></textarea>
</div>

                            </div>
                            <div class="modal-footer">
                            <button type="button" data-dismiss=".modal">Close</button>
                            </div>
                            </form>
                    </div>
            </div>

   </script>

