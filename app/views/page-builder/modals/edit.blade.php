    <script type="text/template" id="page-popup">

            <div class="modal-dialog">
                    <div class="modal-content">
                    <form id="aa" action="#">
                            <div class="modal-header">
                       
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
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

<% if (typeof(id) != 'undefined') { %>
<div class="text-right"><a href="/pagebuilder/<%=id%>/edit">Edit in advanced editer</a></div>
<% } %>

</div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary">Save Changes</button>
                            </div>
                            </form>
                    </div>
            </div>

   </script>

